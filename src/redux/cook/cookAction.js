import {BUY_COOK} from "./cookType"
export const buyCook = (number) =>{
    return{
        type: BUY_COOK,
        payload: number
    }
}