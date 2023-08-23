import { BUY_COOK } from "./cookType";

const initialState = {
  noOfCook: 30,
};

const cookReducer = (state=initialState, action) => {
  switch (action.type){
    case BUY_COOK : return{
        ...state,
        noOfCook: state.noOfCook - action.payload
    }
    default: return state
  }
};
export default cookReducer