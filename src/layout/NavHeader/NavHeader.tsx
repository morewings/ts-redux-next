'use client';

import React from 'react';
import type {FC} from 'react';

import {NavLink} from '@/src/layout/NavLink';

import {Header, Name, Navigation} from './NavHeader.style';

export const NavHeader: FC = () => {
    return (
        <Header>
            <Name>Typescript Redux Next.js Template</Name>
            <Navigation>
                <NavLink href="/">Main</NavLink>
                <NavLink href="/second">Second</NavLink>
            </Navigation>
        </Header>
    );
};
