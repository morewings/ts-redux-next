import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styling';
import { ReduxProvider } from '@/state';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ReduxProvider>
    );
}
