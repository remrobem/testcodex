import Link from 'next/link';

import styles from './EventCard.module.css';

export interface EventCardProps {
  slug: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  shortDescription: string;
  image: string;
}

export function formatDateRange(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });

  return `${formatter.format(new Date(start))} – ${formatter.format(new Date(end))}`;
}

export default function EventCard({
  slug,
  title,
  startDate,
  endDate,
  location,
  shortDescription,
  image
}: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.meta}>
          <span>{formatDateRange(startDate, endDate)}</span>
          <span>{location}</span>
        </div>
        <p className={styles.description}>{shortDescription}</p>
        <Link href={`/events/${slug}`} className={styles.cta}>
          Read more <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
