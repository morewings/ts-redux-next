import type {FC, ReactNode} from 'react';
import React from 'react';
import NextHead from 'next/head';

export type Props = {
    siteTitle?: string;
    pageTitle?: string;
    description?: string;
    viewport?: string;
    favicon?: string;
    children?: ReactNode;
};

export const Head: FC<Props> = ({
    siteTitle = 'Redux Next Template',
    pageTitle,
    description = 'Provided by morewings',
    viewport = 'width=device-width, initial-scale=1',
    favicon = '/favicon.ico',
    children,
}) => {
    return (
        <NextHead>
            <title>
                {siteTitle}
                {pageTitle && ` | `}
                {pageTitle && pageTitle}
            </title>
            <meta name="description" content={description} />
            <meta name="viewport" content={viewport} />
            <link rel="icon" href={favicon} />
            {children}
        </NextHead>
    );
};
