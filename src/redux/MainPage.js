import React from "react"
import store from "./store/store";
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber} from "./actions/Actions"



const ReduxPage = (state) => {
  const dispatch=useDispatch();
  const mystate=useSelector((state)=>state.updateNumber);

  return (
    <>
    <div>
  
    <h1>Increment/Decrement counter</h1>
    <h4>using react and redux</h4>

    <button onClick={()=>{dispatch(incNumber(5))}}>+<span/></button>
    <input 
        type="text"
        onChange={mystate}
        value={mystate}
        
    ></input>
    <button onClick={()=>{dispatch(decNumber(5))}}>-<span/></button>
    <button onClick={()=>{navigator()}}>Next</button>
    </div>
    </>
    
   
  )
};

export default ReduxPage;
