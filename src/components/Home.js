import React from 'react'
import "./Home.css";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";


function Home() {

    const apiData = useSelector((state)=>{
        return state.apiData
    })
    const dispatch = useDispatch();

    useEffect(()=>{
            fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              dispatch({type : "apiChange", payload : data})
            });
    },[dispatch])

    function handleItems(el)
    {
        dispatch({type : "addItem",payload : el})
        dispatch({type : "addTotal",payload : el.price})
    }

  return (<>
    <div className = "home-con">
        {apiData.map((el)=>{
            return (<div className="product-con" key={el.id}>
            <p className="title">{el.title}</p>
            
            <div className="center">
              <img src={el.image} alt="p" className="pic" height="100px" />
              <p className="price">${el.price}</p>
              <button className="btn" onClick = {()=>{handleItems(el)}}>Add to Cart</button>
            </div>
          </div>)
        })}
    </div>
    
    </>
  )
}

export default Home;