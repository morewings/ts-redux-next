import type { ElementType, FC, ReactNode } from 'react';
import React from 'react';

import { Col as ColStyled } from './Layout.style';
import type { OffsetConfig, SizesConfig } from './SizeTypes';

export type ColProps = Partial<SizesConfig> &
    Partial<OffsetConfig> & {
        /** Select an HTML element to render as a container */
        as?: ElementType;
        children?: ReactNode;
        className?: string;
    };

export const Col: FC<ColProps> = ({
    as = 'div',
    children,
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    offsetXS,
    offsetSM,
    offsetMD,
    offsetLG,
    offsetXL
}) => {
    return (
        <ColStyled
            as={as}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            offsetXS={offsetXS}
            offsetSM={offsetSM}
            offsetMD={offsetMD}
            offsetLG={offsetLG}
            offsetXL={offsetXL}
            className={className}>
            {children}
        </ColStyled>
    );
};
