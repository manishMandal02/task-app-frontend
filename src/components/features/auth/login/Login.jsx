import React from 'react'
import './Login.css'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const styles = []

const Login = () => {
  console.warn(styles.Container)
  return (
    <div className="form"> 
        <h2>Welcome Back</h2>
        <p id=''style={{color:'#494949',fontWeight: 'bold'}}>Please signin to your account</p>
        <Logo />
        <div className='first-dive'>
       <div className="input-container">
          <input type="text" name="uname" placeholder='User Name' required />
          <input type="text" name="Password" placeholder='Password' required />
        </div>
        <p>Forgot Password</p>
        </div>
     
        <div className="input-container">
          <button type="submit">Login</button>
          
          <p style={{color:'#494949',fontWeight: 'bold'}}>or</p>
         
          <button id='btn-google' type="button"><span id='google-logo'><img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt="Logo" /></span>Sign In with Google</button>
          <p style={{color:'white',fontWeight: ''}}>Don't have an account<Link><span style={{color:'#4F86EC'}}>Register</span></Link></p>
        </div>
        </div>
  )
}

export default Login