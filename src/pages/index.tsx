import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about <br />
            the <span>React</span> world!
          </h1>
          <p>
            Get access to all the publications <br />
            for <span>$9.90 monthly</span>
          </p>

          <SubscribeButton />
        </section>
        <img
          src='/images/avatar.svg'
          alt='A young man sitting in a desk coding beside a coffee mug'
        />
      </main>
    </>
  );
}
