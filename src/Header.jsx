import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './App.css'
import logo from '../public/white.png';

const Header = () => {
    const {loggedinuser} = useContext(AuthContext);
    return (
        <nav className="navbar container pt-4 pb-5 mb-5">
        
        <Link className='links' to='/' ><img src={logo} className='logo-size' /></Link>
          <div className="d-flex  justify-content-between me-4 me-sm-0">
            <Link className='links' to='/login' ><button className="btn btn-primary px-4 btn-color border-0" type="button">{loggedinuser ? <span>Logout</span> : <span>Login</span>}</button></Link>
          </div>
        
      </nav>
    );
};

export default Header;
