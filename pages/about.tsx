import Head from 'next/head';

import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About | Church of the Epiphany</title>
      </Head>
      <div className={styles.wrapper}>
        <section className={styles.intro}>
          <h1>About Church of the Epiphany</h1>
          <p>
            Church of the Epiphany is an Anglican community that has served our neighbors with
            compassion, thoughtful worship, and joyful hospitality for more than a century. We
            gather to worship God, nurture disciples, and partner in restorative justice throughout
            our city.
          </p>
          <p>
            Whether you are exploring faith, returning to church, or looking for a spiritual home,
            we invite you to journey with us. Together we discover the light of Christ revealed in
            scripture, sacrament, and service.
          </p>
        </section>

        <section className={styles.values}>
          <div className={styles.valueCard}>
            <h3>Rooted in Scripture</h3>
            <p>
              We listen deeply for God&apos;s voice in scripture and the sacred traditions entrusted to the
              Church, allowing them to guide our worship and daily lives.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Gathered in Community</h3>
            <p>
              We are a multi-generational family that celebrates life&apos;s milestones together and shows
              up in times of challenge with prayer, meals, and practical support.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Sent in Service</h3>
            <p>
              We partner with local organizations to meet practical needs, advocate for justice, and
              reflect the love of Christ in tangible ways throughout our neighborhoods.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
