'use client';

import {ThemeProvider as Provider} from 'styled-components';
import type {FC, ReactNode} from 'react';

import {theme} from './theme';

export const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
    return <Provider theme={theme}>{children}</Provider>;
};
