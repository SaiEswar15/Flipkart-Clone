import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Confirmation from "../components/Confirmation";

function RouterComponent() {

    return (
            <Router>
                <Navbar></Navbar>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/success' element={<Confirmation/>}/>
                    </Routes>
            </Router>
    );

}

export default RouterComponent;