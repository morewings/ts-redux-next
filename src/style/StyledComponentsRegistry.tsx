'use client';

import type {FC, ReactNode} from 'react';
import {useState} from 'react';
import {useServerInsertedHTML} from 'next/navigation';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

import {GlobalStyle} from './GlobalStyle';

export const StyledComponentsRegistry: FC<{children: ReactNode}> = ({children}) => {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <GlobalStyle />
            {children}
        </StyleSheetManager>
    );
};
