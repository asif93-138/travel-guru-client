import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import logo from '../public/logo.png';


const HeaderAlt = () => {
    const {loggedinuser, setLoggedinuser} = useContext(AuthContext);
    return (
<nav className="navbar navbar-expand-sm container pt-4 mb-4">
        <div className="container-fluid">
        <Link className='links' to='/' ><img src={logo} className='alt-logo-size' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex  justify-content-between" id="mynavbar">
            <input className="form-control ms-fixing w-50" type="text" placeholder="Search doesn't work!!" />

       
            
            <Link className='links' to='/login' ><button className="btn btn-alt btn-primary px-4 btn-color border-0" type="button">{loggedinuser ? <span>Logout</span> : <span>Login</span>}</button></Link>
      
          </div>
        </div>
      </nav>
    );
};

export default HeaderAlt;