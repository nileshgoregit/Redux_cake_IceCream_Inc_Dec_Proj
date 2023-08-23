import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buyPenut} from "../redux/index"

const PenutContainer = () => {
  const selector = useSelector(state=>state.penut.noOfPenuts)
  const Dispatch = useDispatch()
  return (
    <div>
      <h2>No of penuts: {selector}</h2>
      <button onClick={()=>Dispatch(buyPenut())}>BuyPenuts</button>
    </div>
  )
}

export default PenutContainer