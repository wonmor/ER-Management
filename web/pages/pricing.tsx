import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Pricing.module.css'
import Link from 'next/link'

const Pricing: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ERMS</title>
                <meta name="description" content="Handcrafted for those who save people." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Link href="/">
                    <h1 className={styles.title}>
                        Pricing.
                    </h1>
                </Link>

                <p className={styles.description}>
                    We offer a free plan for small hospitals, and a paid plan for larger hospitals.
                    <br />
                    For larger hospitals, we offer a free trial for 30 days.
                    <br />
                    <br />
                    After that, you can choose to pay only <span className={styles.highlighted}>$8/month</span> per employee.
                </p>
            </main>
        </div>
    )
}

export default Pricing
