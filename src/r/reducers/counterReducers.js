import { DECREASE_COUNT, INCREASE_COUNT } from "../actions/types"

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            const updateState = {
                ...state, // count : 0,
                count: action.payload

            }
            return updateState

        case DECREASE_COUNT:
            return {
                ...state,
                count: action.payload
            }

        default:
            return state
    }
}
