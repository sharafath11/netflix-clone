import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [signState, setSignState] = useState<string>("Sign In");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");  
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  return (
    loading ? 
      <div className='login-spinner'>
        <img src={netflix_spinner} alt="Loading" />
      </div> 
    : 
      <div className='login'>
        <img src={logo} alt="" className="login-logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === 'Sign Up' && <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' />}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            <button type='submit'>{signState}</button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === 'Sign In' 
              ? <p>New to Netflix?<span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
              : <p>Already have an account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>
            }
          </div>
          
        </div>
      </div>
  );
};

export default Login;
