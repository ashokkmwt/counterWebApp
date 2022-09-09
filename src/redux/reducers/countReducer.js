import { DECREASE_COUNT, INCREASE_COUNT } from "../actions/types"

const initialState = {
    count: 0,
};

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECREASE_COUNT:
            const updateState = {
                ...state,
                count: action.payload
            }
            // here we don't change state directly. so we access state's initial value by ...state and then we change it with count: action.payload and we
            // return it. this new value automatically goes to initialState.   here ...state means state (explained in countReducer) and this 
            // state means initialState. or we can say that ...state = state = initialState.

            // state.count = action.payload; wrong
            return updateState

        case INCREASE_COUNT:
            return {
                ...state,
                count: action.payload
                // we can update it by making updateState too.
            }

        default:
            return state
    }
}

// action.payload.count

// const action ={
//         payload:{
//             count:2
//         }
//     }
