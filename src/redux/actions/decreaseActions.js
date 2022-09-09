import { DECREASE_COUNT, INCREASE_COUNT } from "./types"

const decreaseCount = (updateCount) => {
    return {
        type: DECREASE_COUNT,
        payload: updateCount
    }
}

const increaseCount = (updateCount) => {
    return {
        type: INCREASE_COUNT,
        payload: updateCount
    }
}

export {
    decreaseCount,
    increaseCount
} 