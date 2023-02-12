import { NextPage } from 'next'
import React, { useRef, useEffect, useCallback } from "react"
import Head from 'next/head'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'

interface SearchBoxProps {
    className?: string;
    maps: any;
    onPlacesChanged?: (places: any) => void;
    placeholder?: string;
}

const SearchBox = ({ maps, onPlacesChanged, placeholder }: SearchBoxProps) => {
    const input = useRef<HTMLInputElement>(null);
    const searchBox = useRef<any>(null);

    const handleOnPlacesChanged = useCallback(() => {
        if (onPlacesChanged && searchBox.current) {
            onPlacesChanged(searchBox.current.getPlaces());
        }
    }, [onPlacesChanged, searchBox]);

    useEffect(() => {
        if (!searchBox.current && maps) {
            searchBox.current = new maps.places.SearchBox(input.current!);
            searchBox.current.addListener('places_changed', handleOnPlacesChanged);
        }

        return () => {
            if (maps) {
                searchBox.current = null;
                maps.event.clearInstanceListeners(searchBox);
            }
        };
    }, [maps, handleOnPlacesChanged]);

    return (
        <div className={styles.autocomplete}>
            <input className={styles.search} ref={input} placeholder={placeholder} type="text" />
        </div>
    );
};

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

                {window && window.google && window.google.maps && (
                    <SearchBox maps={window.google.maps} placeholder="Search hospitals" />
                )}
            </main>
        </div>
    )
}

export default Register