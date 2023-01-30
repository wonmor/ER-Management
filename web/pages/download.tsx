import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'

const Download: NextPage = () => {
    return (
        <div className={styles.container}>
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
                    Visit Google Play or the App Store.
                </p>
            </main>
        </div>
    )
}

export default Download
