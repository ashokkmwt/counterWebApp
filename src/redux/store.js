import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './reducers/countReducer';

const store = configureStore(
    {
        reducer: {
            countReducer: countReducer,
        }
    }
)

export default store;