import "./Login.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => {
    return state.iserror;
  });

  const login = useSelector((state) => {
    return state.login;
  });

  useEffect(() => {
    if (login) {
        dispatch({type : "statusChange"})
      navigate("/");
    }
  }, [dispatch, login, navigate]);

  function formHandler(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      data.get("email") === "saieswar@gmail.com" &&
      data.get("password") === "saieswar"
    ) {
      console.log("Logged in");
      dispatch({type : "function2"});
    } else {
      console.log("error");
      dispatch({type : "function1"});
    }
  }
  return (
    <div className="con">
      <div className="dec">
        <h1>Login</h1>
        <p>Get access to your orders, wishlist and cart</p>
      </div>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="Enter your email" name="email" />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <button>Login</button>
        {error ? <p className="error">wrong password</p> : null}
      </form>
    </div>
  );
}
export default Login;