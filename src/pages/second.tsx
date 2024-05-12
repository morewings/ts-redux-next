import React from 'react';

import {Head} from '@/layout/Head';
import {NavHeader} from '@/layout/NavHeader';

export default function Second() {
    return (
        <>
            <Head pageTitle="First page" />
            <NavHeader />
            <main>Boring second</main>
        </>
    );
}
