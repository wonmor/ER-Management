import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { capitalizeAfterSpace } from './index'
import React, { useRef, useEffect, MutableRefObject } from "react"
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'
import Script from 'next/script'

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
                   What is your hospital&apos;s name?
                </p>

                <AutoComplete />
            </main>
        </div>
    )
}

export default Register
