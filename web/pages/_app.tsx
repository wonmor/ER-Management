import '../styles/globals.css'
import { Outfit } from '@next/font/google'
import type { AppProps } from 'next/app'
import Script from 'next/script'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '400',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxYv-zSxbEvW-SCt4n8bukHP5YEsze_KA&libraries=places" />

        <style jsx global>{`
          html, input, textarea, select, button {
            font-family: ${outfit.style.fontFamily};
          }
        `}</style>
        
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
