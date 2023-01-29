import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { capitalizeAfterSpace } from './index'
import React, { useState, KeyboardEvent, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Hospital.module.css'
import Link from 'next/link'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'

interface AutoCompleteProps {
    data: string[];
}

const useGoogleMapsApi = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Client-side only...
        if (typeof window === 'undefined') return;
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            setLoaded(true);
        };
        document.body.appendChild(script);
    }, []);

    return [loaded];
}

// https://w3collective.com/react-autocomplete-search/
const hospitalNames = [
    "McMaster Student Care Centre",
    "St. Michael's Hospital",
    "Oakville Trafalgar Memorial Hospital",
    "St. Joseph's Healthcare Hamilton",
]

const AutoComplete: React.FC<AutoCompleteProps> = ({ data }) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [suggestionIndex, setSuggestionIndex] = useState<number>(0);
    const [suggestionsActive, setSuggestionsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.toLowerCase();

      setValue(query);

      if (query.length > 1) {
        const filterSuggestions = data.filter(
          (suggestion) =>
            suggestion.toLowerCase().indexOf(query) > -1
        );

        setSuggestions(filterSuggestions);
        setSuggestionsActive(true);

      } else {
        setSuggestionsActive(false);
      }
    };
  
    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
      setSuggestions([]);
      setValue(e.currentTarget.innerText);
      setSuggestionsActive(false);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // UP ARROW
      if (e.key == "ArrowUp") {
        if (suggestionIndex === 0) {
          return;
        }

        setSuggestionIndex(suggestionIndex - 1);
      }

      // DOWN ARROW
      else if (e.key === "ArrowDown") {
        if (suggestionIndex - 1 === suggestions.length) {
          return;
        }

        setSuggestionIndex(suggestionIndex + 1);
      }
      
      // ENTER
      else if (e.key === "Enter") {
        setValue(suggestions[suggestionIndex]);
        setSuggestionIndex(0);
        setSuggestionsActive(false);
      }
    };
  
    const Suggestions = () => {
      return (
        <ul className={styles.suggestions}>
          {suggestions.map((suggestion, index) => {
            return (
              <li
                className={index === suggestionIndex ? `${styles.active}` : ""}
                key={index}
                onClick={handleClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    };
  
    return (
      <div className={styles.autocomplete}>
        <input
          type="text"
          className={styles.search}
          value={value}
          placeholder="Enter the name of a hospital"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {suggestionsActive && <Suggestions />}
      </div>
    );
};
  
  const PlacesAutocomplete: React.FC = () => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 300,
    });
    const ref = useOnclickOutside(() => {
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  
    const handleSelect = (description: string) => () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
  
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };
  
    const renderSuggestions = () =>
      data.map((suggestion: { description?: any; place_id?: any; structured_formatting?: any }) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <li key={place_id} onClick={handleSelect(suggestion.description)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <div ref={ref as unknown as React.MutableRefObject<HTMLDivElement>}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className={styles.search}
          placeholder="Enter the name of your place..."
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };

const Hospital: NextPage = () => {
    const router = useRouter()

    const {
        query: { userType },
    } = router

    const sanitizedUserType = userType ? capitalizeAfterSpace(userType?.toString().replace("_", " ")) : "UNKNOWN"

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
                        {sanitizedUserType}.
                    </h1>
                </Link>

                <p className={styles.description}>
                    Which hospital are you from?
                </p>

                <AutoComplete data={hospitalNames} />

                <p className={styles.description}>
                    or <Link href="/register"><span className={styles.linkButton}>register as a new hospital</span></Link>
                </p>
                
            </main>
        </div>
    )
}

export default Hospital
