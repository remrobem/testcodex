import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface EventFrontMatter {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  shortDescription: string;
  image: string;
}

export interface EventSummary extends EventFrontMatter {
  slug: string;
}

export interface EventDetail extends EventSummary {
  content: MDXRemoteSerializeResult;
  longDescription: string;
}

const eventsDirectory = path.join(process.cwd(), 'content', 'events');

async function readEventFile(slug: string) {
  const fullPath = path.join(eventsDirectory, `${slug}.mdx`);
  return fs.readFile(fullPath, 'utf8');
}

function sortByStartDate(events: EventSummary[]) {
  return [...events].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export async function getEventSlugs() {
  const files = await fs.readdir(eventsDirectory);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getEventSummaries(): Promise<EventSummary[]> {
  const slugs = await getEventSlugs();
  const events = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readEventFile(slug);
      const { data } = matter(source);
      const frontMatter = data as EventFrontMatter;

      return { slug, ...frontMatter } satisfies EventSummary;
    })
  );

  return sortByStartDate(events);
}

export async function getEventDetail(slug: string): Promise<EventDetail> {
  const source = await readEventFile(slug);
  const { content, data } = matter(source);
  const frontMatter = data as EventFrontMatter;
  const mdxSource = await serialize(content, { scope: frontMatter });

  return {
    slug,
    ...frontMatter,
    content: mdxSource,
    longDescription: content
  };
}
