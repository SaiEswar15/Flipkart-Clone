import {createStore} from "redux";
const initialState = {
    apiData : [],
    cart : [],
    counter : 0,
    totalPrice : 0,
    iserror : false,
    login : false,
    status : "Login"
}
const reducer = ((state = initialState,action)=>{

    if (action.type === "apiChange")
    {
        return {
            ...state,
            apiData : action.payload
        }
    }

    if (action.type === "addItem")
    {
        return {
            ...state,
            cart : [...state.cart, action.payload],
            counter : state.counter+1
        }
    }

    if (action.type === "removeItem")
    {

        return {
           ...state,
           cart :  state.cart.filter((el)=>{
            return (el.id !== action.payload.id)
           }),
           counter : state.counter-1,
           
        }
    }

    if (action.type === "addTotal")
    {
        return {
            ...state,
            totalPrice : state.totalPrice + parseInt(action.payload)
        }
    }

    if (action.type === "removeTotal")
    {
        return {
            ...state,
            totalPrice : state.totalPrice - parseInt(action.payload)
        }
    }

    if (action.type === "function1")
    {
        return {
            ...state,
            iserror : true
        }
    }

    if (action.type === "function2")
    {
        return {
            ...state,
            login : true
        }
    }

    if (action.type === "statusChange")
    {
        return {
            ...state,
            status : "Logout"
        }
    }

    if (action.type === "statusLogout")
    {
        return {
            ...state,
            status : "Login"
        }
    }

    
    return state;
})

const store = createStore(reducer);
export default store;