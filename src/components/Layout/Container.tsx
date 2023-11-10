import type { ElementType, FC, ReactNode } from 'react';

import { Container as ContainerStyled } from './Layout.style';
import type { SizeUnit, FluidUnit, ColumnsConfig } from './SizeTypes';

export type ContainerProps = {
    /** Set Container width in pixels as a number or set to `fluid` to make it 100% */
    containerWidth?: SizeUnit | FluidUnit;
    /** Select HTML element to render as a container */
    as?: ElementType;
    /** Specify additional CSS class. This allows you to use styled(Container) or the css prop in styled-components or emotion. */
    className?: string;
    children: ReactNode;
    columns?: ColumnsConfig;
};

const normalizeWidth = (widthProp: ContainerProps['containerWidth']) => {
    if (widthProp === 'fluid') {
        return '100%';
    }
    return widthProp !== undefined ? `${widthProp}px` : widthProp;
};

export const Container: FC<ContainerProps> = ({
    containerWidth = 1280,
    className,
    as = 'div',
    children,
    columns = 12
}) => {
    const width = normalizeWidth(containerWidth);
    return (
        <ContainerStyled columns={columns} containerWidth={width} as={as} className={className}>
            {children}
        </ContainerStyled>
    );
};
