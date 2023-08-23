import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from '../redux/index';

const HooksCakeContainer = () => {
    const numOfCakesUseSelector = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()       
  return (
    <div>
        <h2>Num of Cakes Hooks : {numOfCakesUseSelector}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy CakeHook</button>
    </div>
  )
}

export default HooksCakeContainer