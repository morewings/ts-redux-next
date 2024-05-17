import {styled, css} from 'styled-components';
import NextLink from 'next/link';
import type {ComponentProps} from 'react';

export const Link = styled(NextLink)<ComponentProps<typeof NextLink> & {active: boolean}>`
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 66%);
    user-select: none;

    ${({active}) =>
        active &&
        css`
            border-bottom: 2px solid white;
            box-shadow: 0 1px 0 0 rgb(0 0 0 / 66%);
            cursor: default;
            pointer-events: none;
        `};
`;
