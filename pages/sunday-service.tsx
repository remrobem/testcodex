import Head from 'next/head';

import Layout from '../components/Layout';
import styles from '../styles/SundayService.module.css';

export default function SundayServicePage() {
  return (
    <Layout>
      <Head>
        <title>Sunday Service | Church of the Epiphany</title>
      </Head>
      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <h1>Join Us This Sunday</h1>
          <p>
            Worship at Church of the Epiphany is rooted in Anglican liturgy and enlivened with
            meaningful music, thoughtful preaching, and prayerful reflection. Whether in person or
            online, you are welcome just as you are.
          </p>
        </section>

        <section className={styles.schedule}>
          <h2 className={styles.sectionTitle}>Weekly Rhythm</h2>
          <ul>
            <li>
              <strong>8:30 AM – Quiet Eucharist:</strong> A contemplative service with scripture,
              prayer, and Holy Communion.
            </li>
            <li>
              <strong>9:30 AM – Formation Hour:</strong> Classes and conversations for adults, youth,
              and children exploring scripture and faith practices.
            </li>
            <li>
              <strong>10:30 AM – Festival Eucharist:</strong> Our primary worship gathering with full
              choir, children&apos;s message, and nursery care available.
            </li>
            <li>
              <strong>Livestream:</strong> The 10:30 service is streamed on YouTube for those joining
              from home or traveling.
            </li>
          </ul>
        </section>

        <section className={styles.gettingReady}>
          <h2 className={styles.sectionTitle}>Planning Your Visit</h2>
          <ul>
            <li>Parking is available in the lot behind the church and along Maple Avenue.</li>
            <li>Greeters are ready to answer questions and help families find their way.</li>
            <li>
              Children are invited to remain in worship or join our Godly Play classroom following the
              opening hymn.
            </li>
            <li>We celebrate Holy Communion weekly and welcome all baptized Christians to receive.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
