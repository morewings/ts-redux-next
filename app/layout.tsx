import type {ReactNode} from 'react';

import {StoreProvider} from '@/src/state/StoreProvider';
import './index.css';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <StoreProvider>
            <html lang="en" suppressHydrationWarning>
                <body>{children}</body>
            </html>
        </StoreProvider>
    );
}
