import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCook} from "../redux/index"

const CookContainer = () => {
    const selector = useSelector(state=>state.cook.noOfCook)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of Cookes : {selector}</h2>
        <button onClick={()=>dispatch(buyCook())}>buyCooks</button>
    </div>
  )
}

export default CookContainer