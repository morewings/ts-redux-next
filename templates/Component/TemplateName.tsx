'use client';

import type {FC} from 'react';
import React from 'react';

import {useCountValue, useIncrementCounter} from '@/src/features/counter';

import {Wrapper, Header, Button} from './TemplateName.style';

export const TemplateName: FC = () => {
    /**
     *  Get count value from Redux store. We defined selector
     *  (state => state.counter.value) inside counter feature folder,
     *  to make component global state agnostic
     */
    const count = useCountValue();

    /** Create incrementCounter action, using custom hook from feature */
    const incrementCounter = useIncrementCounter();

    return (
        <Wrapper>
            <Header>Sync counter</Header>
            <Button onClick={incrementCounter}>Increment by one</Button>
            <div>
                Total value: <strong>{count}</strong>
            </div>
        </Wrapper>
    );
};
