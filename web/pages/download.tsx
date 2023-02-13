import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'
import { Metadata } from '.'

const Download: NextPage = () => {
    return (
        <div className={styles.container}>
            <Metadata />

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
