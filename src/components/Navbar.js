import React from 'react'
import "./Navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";


function Navbar() {

    const counter = useSelector((state)=>{
        return state.counter
    })

    const status = useSelector((state)=>{
        return state.status
    })

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    function loginHandler()
    {
        
        if (status === "Login")
        {
            Navigate("/login")
        }

        if (status === "Logout")
        {
            dispatch({type: "statusLogout"})
        }
    }
  return (
    <div className = "nav-container">
        <Link to = "/">
            <div className = "logo-con">
                <img src = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt = "logo"/>
            </div>
        </Link>
        <div className = "search-con">
            <input type = "text" placeholder = "Search for products "/>
            <SearchIcon className = "search-icon"/>
        </div>
        {/* <Link to = "/login"> */}
            <div className = "login-con">
                <button onClick = {loginHandler}>{status}</button>
            </div>
        {/* </Link> */}
        <Link to = "/cart" className = "cart-link">
            <div className = "cart-con">
                <span><ShoppingCartIcon/></span><span className = "counter">{counter}</span>
            </div>
        </Link>
    </div>
  )
}

export default Navbar