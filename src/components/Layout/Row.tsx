import React from 'react';
import type { ReactNode, FC, ElementType } from 'react';

import { Row as RowStyled } from './Layout.style';

type RowProps = {
    /** Select an HTML element to render as a container */
    as?: ElementType;
    children: ReactNode;
    className?: string;
};

export const Row: FC<RowProps> = ({ className, children, as = 'div' }) => {
    return (
        <RowStyled as={as} className={className}>
            {children}
        </RowStyled>
    );
};
