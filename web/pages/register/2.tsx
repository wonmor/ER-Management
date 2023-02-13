import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Hospital.module.css'
import Link from 'next/link'
import { Metadata } from '..'

const RegisterPageTwo: NextPage = () => {
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
                    Register.
                </h1>

                <p className={styles.description}>
                    Fill out the form below to register.
                </p>
            </main>
        </div>
    )
}

export default RegisterPageTwo
