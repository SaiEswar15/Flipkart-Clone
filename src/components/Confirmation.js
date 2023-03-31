import React from 'react'
import "./Confirmation.css";
import {useSelector} from "react-redux";
function Confirmation() {

    const getStatus = useSelector((state)=>{
        
        return state.status
    })
    
  return (<>
    {getStatus === "Login" ?
    <div className = "placedOrders">Login to place your orders.</div>
    : <div className = "placedOrders">Your orders has been placed.</div> }
    </>)
}

export default Confirmation;