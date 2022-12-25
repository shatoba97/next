import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {Loyaut} from "../shared/components/loyaut/Loyaut";

export default function App({ Component, pageProps }: AppProps) {
  return <Loyaut>
    <Component {...pageProps} />
  </Loyaut>
}
