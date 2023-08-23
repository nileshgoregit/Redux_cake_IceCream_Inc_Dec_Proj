import { BUY_PENUT } from "./penutType"

const initialState = {
    noOfPenuts: 50
}

const penutReducer = (state=initialState, action) =>{
    switch (action.type) {
        case BUY_PENUT: return{
            ...state,
            noOfPenuts: state.noOfPenuts - 1
        }   
        default: return state
            
    }
}

export default penutReducer