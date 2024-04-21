import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import logo from '../public/logo.png';


const HeaderAlt = () => {
    const {loggedinuser, setLoggedinuser} = useContext(AuthContext);
    return (
<nav className="navbar container pt-4 mb-4 px-3">
        <Link className='links' to='/' ><img src={logo} className='alt-logo-size' /></Link>
          <div className="d-flex justify-content-between">
            <Link className='links' to='/login' ><button className="btn btn-alt btn-primary px-4 btn-color border-0" type="button">{loggedinuser ? <span>Logout</span> : <span>Login</span>}</button></Link>
          </div>
      </nav>
    );
};

export default HeaderAlt;