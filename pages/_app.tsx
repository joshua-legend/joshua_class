import type { AppProps } from 'next/app'
import {Global} from "@emotion/react"
import {global} from "@/styles/global";
import "../public/fonts/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Global styles={global} />
    <Component {...pageProps} />
  </>}

export default MyApp
