import React from 'react'
import './navba.css';
import logo from './1.png';
import { Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div className='mainb'>
        <div className='lcont'>
            <div className='minb'>
                <div className='iteml'>
                    <img src={logo} alt="logo" /> <br />
                    <h1 color="white">Customer Login</h1>
                <label for="user">Username</label><br/>
                <input type="text" id="user"/><br/>
                <label for="pass">Password</label><br/>
                <input type="password" id="pass"/><br/>
                <button>Sign Up</button> <br /> <Link to="/login" className='abc'> Already signUp? Login</Link>
                <br /><br />

                </div>
            </div>

        </div>
      
    </div>
  )
}


export default Signup
