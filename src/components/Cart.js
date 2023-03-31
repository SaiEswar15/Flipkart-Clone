import React from 'react'
import "./Cart.css";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";


function Cart() {

    const dispatch = useDispatch();
    
    const items = useSelector((state)=>{
        return state.cart
    })

    const total = useSelector((state)=>{
        return state.totalPrice
    })

    const count = useSelector((state)=>{
        return state.counter
    })

    function removeItem(el){
        dispatch({type : "removeItem", payload : el})
        dispatch({type : "removeTotal", payload : el.price})
    }
    
  return (
    <div className = "cartpage-con">
        <div className = "cartitems-con">
            <p className='heading'>Your Items</p>
            {items ? <>{items.map((el)=>{
            return (<>
            <div className = "singleitem-con">
                <div className = "image-con">
                    <img src = {el.image} alt = "product" height = "100px"/>
                </div>
                <div className = "details-con">
                    <div>
                        <p className = "p cartitems-title">{el.title}</p>
                        <p className = "p">quantity</p>
                        <p className = "p cartitems-price">${el.price}</p>
                        <p className = "p">pricetotal</p>
                        
                            <button className = "p remove-btn" onClick = {()=>{removeItem(el)}}>Remove from cart</button>
                        
                    </div>
                </div>
            </div>
            </>)
        })}</> : null}
            
            
        </div>
        <div className = "total-con">
            <div className = "summary" >Summary</div>
            <div className = "ti">Total items : <span className = "ti-color">{count}</span></div>
            <div className = "ti">Total amount : <span className = "ti-color">${total}</span></div>
            <Link to = "/success"><button className = "place-order">Place your Order</button></Link>
        </div>
    </div>
  )
}

export default Cart;