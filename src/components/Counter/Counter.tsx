'use client';

import type {FC} from 'react';

import {useCountValue, useIncrementCounter} from '@/src/features/counter';

import classes from './Counter.module.css';

const Counter: FC = () => {
    /**
     *  Get count value from Redux store. We defined selector
     *  (state => state.counter.value) inside counter feature folder,
     *  to make component global state agnostic
     */
    const count = useCountValue();

    /** Create incrementCounter action, using custom hook from feature */
    const incrementCounter = useIncrementCounter();

    return (
        <div className={classes.counter}>
            <h2 className={classes.header}>Sync counter</h2>
            <button className={classes.button} type="button" onClick={incrementCounter}>
                Increment by one
            </button>
            <div>
                Total value: <strong>{count}</strong>
            </div>
        </div>
    );
};

export default Counter;
