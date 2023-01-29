import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { capitalizeAfterSpace } from './index'
import React, { useRef, useEffect, MutableRefObject } from "react"
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'

const AutoComplete = () => {
    const autoCompleteRef: MutableRefObject<any> = useRef();
    const inputRef: MutableRefObject<any> = useRef();
    const options = {
     componentRestrictions: { country: "ng" },
     fields: ["address_components", "geometry", "icon", "name"],
     types: ["establishment"]
    };
    useEffect(() => {
     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
     );
    });

    return (
        <div>
            <input className={styles.search} ref={inputRef} />
        </div>
    );
}

const Register: NextPage = () => {
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
                        Register.
                    </h1>
                </Link>

                <p className={styles.description}>
                   What is your hospital&apos;s name?
                </p>

                <AutoComplete />
            </main>
        </div>
    )
}

export default Register
