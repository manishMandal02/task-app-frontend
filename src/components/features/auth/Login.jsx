import React, { useContext, useState } from "react";
import "./Login.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/userContext";

const styles = [];


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    
    const { setUser } = useContext(UserContext);
  // Handling the name change
  const handleEame = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    if (email === "" || password === "") {
      setError(true);
    } else {
      let data = {
        email: email,
        password: password,
      };

      try {
        const  {data: dataSource}  = await axios.post("/api/auth/login", data);
        console.warn("dataSource",dataSource)
        setUser({
          firstName: dataSource.firstName,
          lastName: dataSource.lastName,
          email: dataSource.email,
          token: dataSource.token,
        });
        setSubmitted(true);
        setError(false);
    
      } catch (error) {
        alert(error)
      }
    }
  };
   // Showing success message
   const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        
        <h1>Login successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1
          style={{
            borderColor: "white",
            border: 2,
            padding: 10,
          }}
        >
          <span
            style={{
              backgroundColor: "red",
              borderRadius: "100%",
              width: "auto",
              height: 80,
              padding: 5,
              color: "white",
            }}
          >
            !
          </span>{" "}
          Please enter all the fields
        </h1>
      </div>
    );
  };


  return (
    <div className="form">
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <h2>Welcome Back</h2>
      <p id="" style={{ color: "#494949", fontWeight: "bold" }}>
        Please signin to your account
      </p>
      <Logo />
      <div className="input-container">
        <input
          onChange={handleEame}
          value={email}
          type="text"
          name="email"
          placeholder="Email Id"
          required
        />
        <input
          onChange={handlePassword}
          value={password}
          type="text"
          name="Password"
          placeholder="Password"
          required
        />
        <p id="forgotPas">Forgot Password</p>
      </div>

      {/* </div> */}

      <div className="input-container">
        <button onClick={handleSubmit} type="submit">
          Login
        </button>

        <p style={{ color: "#494949", fontWeight: "bold" }}>or</p>

        <button id="btn-google" type="button">
          <span id="google-logo"> 
            <img
            // style={{ flexDirection: 'column-reverse',
            //   width:30,
            //   height: 30,
            //   tabSize:20,
            //   position: 'absolute',
            //   backgroundColor: '#f8f9fd',
            //   // top: 0,
            //   // left: 0,
            //   borderRadius: '50%'}}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Logo"
            />
          </span>
          Sign In with Google
        </button>
        <p style={{ color: "white", fontWeight: "" }}>
          Don't have an account ?{" "}
          <span style={{ color: "#4F86EC" }}><Link to='/register'>Register</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Login;
