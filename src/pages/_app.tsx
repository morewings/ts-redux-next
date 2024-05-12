import React from 'react';
import type {AppProps} from 'next/app';
// import 'the-new-css-reset/css/reset.css';

import {ReduxProvider} from '@/state';

import './index.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ReduxProvider>
            <Component {...pageProps} />
        </ReduxProvider>
    );
}
