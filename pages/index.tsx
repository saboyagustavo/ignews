import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
        <Head>
          <title>HOME | ig.news</title>
        </Head>
        <header>
          <h1 className={styles.title}>Hello <span>World!</span></h1>
        </header>
    </>
  )
}
