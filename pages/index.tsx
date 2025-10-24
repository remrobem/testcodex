import type { GetStaticProps } from 'next';
import Head from 'next/head';

import EventCard from '../components/EventCard';
import Layout from '../components/Layout';
import type { EventSummary } from '../lib/events';
import { getEventSummaries } from '../lib/events';
import styles from '../styles/Home.module.css';

interface HomeProps {
  events: EventSummary[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const events = await getEventSummaries();

  return {
    props: {
      events
    }
  };
};

export default function Home({ events }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Church of the Epiphany | Welcome Home</title>
      </Head>
      <section className={styles.hero}>
        <h1>Rooted in Worship, Growing in Community, Serving in Love</h1>
        <p>
          We are a welcoming Anglican church in the heart of the city, gathering to celebrate
          Christ&apos;s presence, deepen our faith, and embody hope through service.
        </p>
      </section>

      <section className={styles.events}>
        <div className={styles.eventsHeader}>
          <h2>Upcoming Gatherings</h2>
          <p>Discover what&apos;s happening at Church of the Epiphany.</p>
        </div>
        {events.length === 0 ? (
          <div className={styles.emptyState}>
            <p>New events will be announced soon. Check back for the latest updates.</p>
          </div>
        ) : (
          <div className={styles.eventsGrid}>
            {events.map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
