import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'

const Download: NextPage = () => {
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
                    Download.
                </h1>

                <p className={styles.description}>
                    Available on Web, iOS, watchOS, and Android.
                    <br />
                    Anywhere, anytime, on any device.
                    <br />
                    <br />
                    Visit <Link href="/"><span className={styles.linkButton}>Google Play</span></Link> or the <Link href="/"><span className={styles.linkButton}>App Store</span></Link>.
                </p>
            </main>
        </div>
    )
}

export default Download
