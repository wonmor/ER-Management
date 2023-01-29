import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'

const Download: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ERMs</title>
                <meta name="description" content="Handcrafted for those who save people." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Link href="/">
                    <h1 className={styles.title}>
                        Download.
                    </h1>
                </Link>

                <p className={styles.description}>
                    Available on Web, iOS, and Android.
                    <br />
                    Anywhere, anytime, on any device.
                    <br />
                    Visit Google Play or the App Store.
                </p>
            </main>
        </div>
    )
}

export default Download
