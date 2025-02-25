import type {ReactNode} from 'react';

import {StoreProvider} from '@/src/state/StoreProvider';
import {StyledComponentsRegistry, ThemeProvider} from '@/src/style';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <StoreProvider>
            <ThemeProvider>
                <html lang="en" suppressHydrationWarning>
                    <body>
                        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                    </body>
                </html>
            </ThemeProvider>
        </StoreProvider>
    );
}
