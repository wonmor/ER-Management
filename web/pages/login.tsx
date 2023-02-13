import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { capitalizeAfterSpace, Metadata } from './index'
import React from 'react'
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
                    Login.
                </h1>

                <p className={styles.description}>
                   Welcome back, {sanitizedUserType}.
                </p>
            </main>
        </div>
    )
}

export default Login
