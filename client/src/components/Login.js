import React, { useState } from "react";
import axios from 'axios';

const initialUserValues = {
  username: "",
  password: "",
}

const Login = (props) => {
  const [ user, setUser ] = useState(initialUserValues);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="login-form">
      <h1>Welcome to the Bubble App!</h1>
      <p>Please Login</p>
      <form onSubmit={handleSubmit} >
        <label>Username<br/></label>
          <input 
            type="text"
            name="username"
            onChange={handleChange}
          />
  
        <label>Password<br/></label>
          <input 
            type="password"
            name="password"
            onChange={handleChange}
          />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
