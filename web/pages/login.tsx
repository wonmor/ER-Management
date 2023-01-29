import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { capitalizeAfterSpace } from './index'
import React, { useState, KeyboardEvent, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'

const Login: NextPage = () => {
    const router = useRouter()

    const {
        query: { userType },
    } = router

    const sanitizedUserType = userType ? capitalizeAfterSpace(userType?.toString().replace("_", " ")) : "UNKNOWN"

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
                        Login.
                    </h1>
                </Link>

                <p className={styles.description}>
                   Welcome back, {sanitizedUserType}.
                </p>
            </main>
        </div>
    )
}

export default Login
