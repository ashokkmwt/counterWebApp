import React, { useState } from 'react'
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

// here you can import it both of the components r and redux. Both are working.
// import  {decreaseCount, increaseCount } from '../../redux/actions/decreaseActions';
import { increaseCount, decreaseCount } from '../../r/actions/counterActrions';

export default function Counter() {
    const [count, setCount] = useState(0);

    // const counting = useSelector(state => state.counterReducer);
    const counting = useSelector(state => state.countReducer);


    const dispatch = useDispatch();
    const _decreaseCount = () => {
        // alert("hello")
        if (count === 0) {
            return;
        }
        const updateCount = count - 1;
        setCount(updateCount);
        // here we are sending only one value (updateCount), so we don't need to create data object.

        dispatch(decreaseCount(updateCount))

    }

    const _increaseCount = () => {
        if (count >= 10) {
            return
        }
        const updateCount = count + 1;
        setCount(updateCount);
        dispatch(increaseCount(updateCount));
    }
    return (
        <>
            <h3>Count: [{counting.count}]</h3><br />
            <div className='btn'>
                <button onClick={_decreaseCount}>Decrease</button>
                <button onClick={_increaseCount}>Increase</button>
            </div><br />
            <h4>{count === 0 ? "You can't decrease more" : null}</h4>
            <h4>{count >= 10 ? "You can't increase more" : null}</h4>
        </>
    )
}

