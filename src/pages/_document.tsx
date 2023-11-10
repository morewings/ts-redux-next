import { Html, Head, Main, NextScript } from 'next/document';

import { StyledComponentsRegistry } from '@/styling';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <StyledComponentsRegistry>
                    <Main />
                </StyledComponentsRegistry>
                <NextScript />
            </body>
        </Html>
    );
}
