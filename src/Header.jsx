import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './App.css'

const Header = () => {
    const {loggedinuser} = useContext(AuthContext);
    return (
        <div>
            <h1>Header</h1>
            <Link className='links' to='/' >Home</Link>
            <Link className='links' to='/login' >{loggedinuser ? <span>Logout</span> : <span>Login</span>}</Link>
           
        </div>
    );
};

export default Header;