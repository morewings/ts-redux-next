import styled, { css } from 'styled-components';

import type { SizesConfig, OffsetConfig, SizeUnit, FluidUnit, ColumnsConfig } from './SizeTypes';

// TODO: add LayoutContext and make this configurable value. Same for base=12|16
export const GAP_DEFAULT = 16;

export const Container = styled.div<{ containerWidth?: string; columns: ColumnsConfig }>`
    --base: ${({ columns }) => columns};
    --gap: ${GAP_DEFAULT}px;
    --containerWidth: ${({ containerWidth }) => containerWidth};

    margin: auto;
    max-width: 100%;
    width: var(--containerWidth);
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* gap variable is taken from Container */
    gap: var(--gap);
`;

const setFluidWidth = (breakpoint?: SizeUnit | FluidUnit) =>
    breakpoint === 'fluid' &&
    css`
        flex-grow: 1;
    `;

export const Col = styled.div<Partial<SizesConfig> & Partial<OffsetConfig>>`
    --totalGaps: calc(var(--gap) * (var(--base) - 1));
    --includedGaps: calc(var(--gap) * (var(--span) - 1));
    --singleWidth: calc((var(--containerWidth) - var(--totalGaps)) / var(--base));
    --totalWidth: calc(var(--singleWidth) * var(--span) + var(--includedGaps));
    --offsetWidth: calc(var(--singleWidth) * var(--offset) + var(--gap) * var(--offset));

    flex: var(--span);
    margin-left: var(--offsetWidth);
    max-width: var(--totalWidth);

    ${({ theme }) => `@media ${theme.mediaQueries.xsMin}`} {
        --offset: ${({ offsetXS }) => offsetXS};
        --span: ${({ xs = 1 }) => xs};

        ${({ xs }) => setFluidWidth(xs)};
    }

    ${({ theme }) => `@media ${theme.mediaQueries.smMin}`} {
        --offset: ${({ offsetSM }) => offsetSM};
        --span: ${({ sm }) => sm};

        ${({ sm }) => setFluidWidth(sm)}
    }

    ${({ theme }) => `@media ${theme.mediaQueries.mdMin}`} {
        --offset: ${({ offsetMD }) => offsetMD};
        --span: ${({ md }) => md};
        ${({ sm }) => setFluidWidth(sm)}
    }

    ${({ theme }) => `@media ${theme.mediaQueries.lgMin}`} {
        --offset: ${({ offsetLG }) => offsetLG};
        --span: ${({ lg }) => lg};
        ${({ sm }) => setFluidWidth(sm)}
    }

    ${({ theme }) => `@media ${theme.mediaQueries.xlMin}`} {
        --offset: ${({ offsetXL }) => offsetXL};
        --span: ${({ xl }) => xl};
        ${({ sm }) => setFluidWidth(sm)}
    }
`;

export const Cell = styled.div`
    align-items: center;
    background: gray;
    border-radius: 4px;
    color: white;
    display: flex;
    flex-direction: column;
    height: 64px;
    justify-content: center;
    width: 100%;
`;
