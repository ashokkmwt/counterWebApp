import { DECREASE_COUNT, INCREASE_COUNT } from "./types"


const increaseCount = (updateCount) => {
    return {
        type: INCREASE_COUNT,
        payload: updateCount
    }
    
}

const decreaseCount = (updateCount) => {
    return {
        type: DECREASE_COUNT,
        payload: updateCount
    }
}

export {
    increaseCount,
    decreaseCount
}