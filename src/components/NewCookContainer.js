import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCook } from "../redux/index";

const NewCookContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cookes: {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>props.buyCook(number)}>Buy {number} Cook</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCook: (number) => dispatch(buyCook(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCookContainer);
