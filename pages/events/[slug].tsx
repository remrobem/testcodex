import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

import Layout from '../../components/Layout';
import { formatDateRange } from '../../components/EventCard';
import type { EventDetail } from '../../lib/events';
import { getEventDetail, getEventSlugs } from '../../lib/events';
import styles from '../../styles/EventDetail.module.css';

interface EventPageProps {
  event: EventDetail;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getEventSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<EventPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const event = await getEventDetail(slug);

  return {
    props: {
      event
    }
  };
};

export default function EventPage({ event }: EventPageProps) {
  return (
    <Layout>
      <Head>
        <title>{event.title} | Church of the Epiphany</title>
        <meta name="description" content={event.shortDescription} />
      </Head>
      <article className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>{event.title}</h1>
          <div className={styles.meta}>
            <span>
              <strong>When</strong>
              {formatDateRange(event.startDate, event.endDate)}
            </span>
            <span>
              <strong>Where</strong>
              {event.location}
            </span>
          </div>
          <div className={styles.imageWrapper}>
            <img src={event.image} alt="" />
          </div>
        </header>
        <div className={styles.body}>
          <MDXRemote {...event.content} />
        </div>
      </article>
    </Layout>
  );
}
