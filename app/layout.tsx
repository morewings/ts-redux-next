import type {ReactNode} from 'react';

import {StoreProvider} from '@/src/state/StoreProvider';
import './index.css';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
