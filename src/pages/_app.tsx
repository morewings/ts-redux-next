import type { AppProps } from 'next/app'
import {Provider, themeImovirtual, themeOtodom, themeStoria} from '@olxui/core';

/* Build time theme injection example */
const selectedTheme = {
  'IMOVIRTUAL': themeImovirtual,
  'OTODOM': themeOtodom,
  'STORIA': themeStoria,
}[process.env.THEME as 'IMOVIRTUAL' | 'OTODOM' | 'STORIA'] || themeOtodom;

export default function App({ Component, pageProps }: AppProps) {
  return <Provider theme={selectedTheme}><Component {...pageProps} /></Provider>
}
