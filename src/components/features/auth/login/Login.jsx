import React from 'react'
import './Login.css'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const styles = []

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
     // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    if (
      name === "" ||
      password === ""
    ) {
      alert('error')
    } else {
      let data = {
        firstName: name,
        password: password,
      };
      console.warn("dta", data);
      console.warn("/api/auth");
      await axios.post("/api/auth", data);
      setSubmitted(true);
      setError(false);
    }
  }

  return (
    <div className="form"> 
        <h2>Welcome Back</h2>
        <p id=''style={{color:'#494949',fontWeight: 'bold'}}>Please signin to your account</p>
        <Logo />
        {/* <div className='first-dive'> */}
       <div className="input-container">
       <input
            onChange={handleName}
            value={name}
            type="text"
            name="name"
            placeholder="Full Name"
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
          <button onClick={handleSubmit()} type="submit">Login</button>
          
          <p style={{color:'#494949',fontWeight: 'bold'}}>or</p>
         
          <button id='btn-google' type="button"><span id='google-logo'><img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt="Logo" /></span>Sign In with Google</button>
          {/* <p style={{color:'white',fontWeight: ''}}>Don't have an account<span style={{color:'#4F86EC'}}>Register</span></p> */}
        </div>
        </div>
  )
}

export default Login