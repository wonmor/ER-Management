import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Pricing.module.css'
import Link from 'next/link'
import { Metadata } from '.'

const Pricing: NextPage = () => {
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
                    Pricing.
                </h1>

                <p className={styles.description}>
                    We offer a free plan for small clinics, and a paid plan for larger hospitals.
                    <br />
                    For larger hospitals, we offer a free trial for 30 days.
                    <br />
                    <br />
                    After that, you can choose to pay only <span className={styles.highlighted}>$8/month</span> per employee.
                </p>

                <p className={styles.description}>
                    <Link href="/register/1"><span className={styles.linkButton}>Register as a new hospital</span></Link>
                </p>
            </main>
        </div>
    )
}

export default Pricing
