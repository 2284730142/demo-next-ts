import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/counterSlice';

export default function Counter() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    console.log('count', count);

    useEffect(() => {
        console.log('count', count);
    }, [count]);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
