import React from 'react'
import {connect} from "react-redux"
import { buyIceCream } from '../redux/index'

const IceCreamContainer = (props) => {
  return (
    <div>
        <h2>Num of IceCreams : {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>BuyIceCream</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)