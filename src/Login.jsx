import React from 'react'
import './navba.css';
import logo from './2.png';
import { Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='mainb'>
        <div className='lcont'>
            <div className='minb'>
                <div className='iteml'>
                    <img src={logo} alt="logo" /> <br />
                    <h1 color="white">Customer Login</h1>
                <label for="user">Username</label><br/>
                <input type="text" id="user" placeholder='Username here'/><br/>
                <label for="pass">Password</label><br/>
                <input type="password" id="pass" placeholder='Password heres'/><br/>
                <button>Login</button>  <br /><Link to="/signup" className='abc'>Sign Up</Link>
<br />
<br />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Login
