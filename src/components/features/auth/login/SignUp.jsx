import React, { useState } from "react";
import "./Login.css";
import Logo from "../Logo";
import axios from "axios";
const styles = [];

const SignUp = () => {
  // States for registration
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the fname change
  const handlefName = (e) => {
    setfName(e.target.value);
    setSubmitted(false);
  };
  // Handling the lname change
  const handlelName = (e) => {
    setlName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  // Handling the confirm password change
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    // console.warn("data", e);
    e.preventDefault();
    // if (password !== cPassword) {
    //   return (
    //     <>
    //       <h1
    //         style={{
    //           // backgroundColor: "white",
    //           // backgroundColor: "transparent",
    //           borderColor: "white",
    //           border: 2,
    //           padding: 10,
    //         }}
    //       >
    //         <span
    //           style={{
    //             backgroundColor: "red",
    //             borderRadius: "100%",
    //             width: "auto",
    //             height: 80,
    //             padding: 5,
    //             color: "white",
    //           }}
    //         >
    //           !
    //         </span>{" "}
    //         Password don't match
    //       </h1>
    //     </>
    //   );
    // } else {
      if (
        fName === "" ||
        lName === "" ||
        email === "" ||
        password === "" ||
        cPassword === ""
      ) {
        setError(true);
      } else {
        let data = {
          firstName: fName,
          lastName: lName,
          email: email,
          password: password,
        };
        console.warn("dta", data);
        console.warn("/api/auth");
        await axios.post("/api/auth", data);
        setSubmitted(true);
        setError(false);
      }
    // }
  };

  // Showing success message
  const successMessage = () => {
    // console.warn("success");
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        
        {/* <h1>User {fName} successfully registered!!</h1> */}
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
            // backgroundColor: "white",
            // backgroundColor: "transparent",
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
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {/* {successMessage()} */}
      </div>
      <h2 style={{paddingTop:10}}>Create new Account</h2>
      <p id="" style={{ color: "#494949", fontWeight: "bold" }}>
        Please fill in the form to continue
      </p>
      {/* <Logo /> */}
      <div className="first-dive">
        <div className="input-container">
          <input
            onChange={handlefName}
            value={fName}
            type="text"
            name="ufname"
            placeholder="First Name"
            required
          />
          <input
            onChange={handlelName}
            value={lName}
            type="text"
            name="ulname"
            placeholder="Last Name"
            required
          />
          <input
            onChange={handleEmail}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
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
          {/* <input
            onChange={handleCPassword}
            value={cPassword}
            type="text"
            name="cPassword"
            placeholder="Confirm Password"
            required
          /> */}
        </div>
      </div>

      <div className="input-container">
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
        <p style={{ color: "#494949", fontWeight: "bold" }}>or</p>
        <button id="btn-google" type="button">
          <span id="google-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Logo"
            />
          </span>
          Sign In with Google
        </button>
        <p style={{ color: "white", fontWeight: "" }}>
          have an account
          ? {"  "}
          <span style={{ color: "#4F86EC", fontSize: 20 }}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
