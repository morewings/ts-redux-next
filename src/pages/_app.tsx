import type { AppProps } from 'next/app'
import {Provider, themeMotors} from '@olxui/core'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider theme={themeMotors}><Component {...pageProps} /></Provider>
}
