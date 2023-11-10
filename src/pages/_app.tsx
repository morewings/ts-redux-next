import type { AppProps } from 'next/app';
// import 'the-new-css-reset/css/reset.css';

import { GlobalStyle, theme, ThemeProvider } from '@/styling';
import { ReduxProvider } from '@/state';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </ReduxProvider>
    );
}
