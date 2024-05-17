import {render as renderVanilla} from '@testing-library/react';
import type {ReactElement} from 'react';
import {Fragment} from 'react';
import type {RenderOptions, RenderResult} from '@testing-library/react';

import {ThemeProvider} from '@/src/style';

export const render = (
    Component: ReactElement,
    options?: RenderOptions
): RenderResult => {
    const ExtraWrapper = options?.wrapper ? options?.wrapper : Fragment;
    return renderVanilla(Component, {
        ...options,
        wrapper: ({children}) => (
            <ExtraWrapper>
                <ThemeProvider>{children}</ThemeProvider>
            </ExtraWrapper>
        ),
    });
};
