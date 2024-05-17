'use client';

import React from 'react';

import {useGetRandomNumberQuery, useRandomNumber, useLoadingState} from '@/src/features/random';

import {Wrapper, Header, Button} from './Random.style';

const Random = () => {
    /** Loading state of random.org request from Redux store */
    const {isLoading, hasError, isFulfilled} = useLoadingState();

    /** Random number value */
    const number = useRandomNumber();

    /** Create incrementCounter action, using custom hook from feature */
    const getNumber = useGetRandomNumberQuery();

    /** Define pristine state condition, when user didn't do any actions */
    const isPristine = !isLoading && !hasError && !isFulfilled;

    return (
        <Wrapper>
            <Header>Async Random</Header>
            <Button disabled={isLoading} type="button" onClick={getNumber}>
                Get random number
            </Button>
            {isPristine && <div>Click the button to get random number</div>}
            {isLoading && <div>Getting number</div>}
            {isFulfilled && (
                <div>
                    Number from random.org: <strong>{number}</strong>
                </div>
            )}
            {hasError && <div>Ups...</div>}
        </Wrapper>
    );
};

export default Random;
