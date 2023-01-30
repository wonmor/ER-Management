import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalizeAfterSpace = (str: string) => {
  return str.split(" ").map(capitalize).join(" ")
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EMERGY</title>
        <meta name="description" content="Handcrafted for those who save people." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <header>
            <h1 className={styles.title}>
              EMERGY
            </h1>
          </header>
        </Link>

        <h1 className={styles.title}>
            Welcome.
        </h1>

        <p className={styles.description}>
          No-BS emergency department management system.
          <br />
          Available on Web, iOS, watchOS, and Android.
        </p>

        <div className={styles.grid}>
          <Link
            href={{
              pathname: "/hospital",
              query: { userType: "front_desk" },
            }}

            className={[styles.card, styles.featured].join(" ")}
          >
            <h2>Front Desk &rarr;</h2>
            <p>Admit patients, describe their symptoms, and match with the right doctor.</p>
          </Link>

          <Link
            href={{
              pathname: "/hospital",
              query: { userType: "doctor" },
            }}

            className={[styles.card, styles.featured].join(" ")}
          >
            <h2>Doctor &rarr;</h2>
            <p>Manage the priority list of the patients, with live updates.</p>
          </Link>

          <Link
            href={{
              pathname: "/download",
            }}

            className={styles.card}
          >
            <h2>Download &rarr;</h2>
            <p>Install our latest app on your iPhone, iPad, or Android.</p>
          </Link>

          <Link
            href={{
              pathname: "/pricing",
            }}

            className={styles.card}
          >
            <h2>Pricing &rarr;</h2>
            <p>
              Learn more about our subscription plans.
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <h1>
          Proudly <span className={styles.highlighted}>Canadian</span>.
        </h1>

        <br />

        <span>
          Developed by John, Sajjad, Tom, and Kevin.
        </span>
      </footer>
    </div>
  )
}

export default Home
