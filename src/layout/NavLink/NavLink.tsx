'use client';

import type {FC, ReactNode, ComponentProps} from 'react';
import type NextLink from 'next/link';
import {usePathname} from 'next/navigation';

import {Link} from './NavLink.style';

export type Props = ComponentProps<typeof NextLink> & {
    children?: ReactNode;
};

export const NavLink: FC<Props> = ({children, href}) => {
    const currentPath = usePathname();
    return (
        <Link href={href} active={currentPath === href}>
            {children}
        </Link>
    );
};
