import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './App.css'
import logo from '../public/white.png';

const Header = () => {
    const {loggedinuser} = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-sm container pt-4 pb-5 mb-5">
        <div className="container-fluid">
        <Link className='links' to='/' ><img src={logo} className='logo-size' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex  justify-content-between" id="mynavbar">
            <input className="form-control ms-fixing search-bg w-50 text-white" type="text" placeholder="Search doesn't work!!" />

       
            
            <Link className='links' to='/login' ><button className="btn btn-primary px-4 btn-color border-0" type="button">{loggedinuser ? <span>Logout</span> : <span>Login</span>}</button></Link>
      
          </div>
        </div>
      </nav>
    );
};

export default Header;
