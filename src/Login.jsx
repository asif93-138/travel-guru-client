import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from './firebase.init';
import { AuthContext } from './AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '../public/logo.png';
import HeaderAlt from './HeaderAlt';



const Login = () => {
    const {loggedinuser, setLoggedinuser} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = useLocation().state?.from.pathname || '/';
    // console.log(loggedinuser);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    function si() {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setLoggedinuser(user);
            navigate(from, {replace:true});
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    function so() {
        signOut(auth).then(() => {
            setLoggedinuser(null);
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
<>
<HeaderAlt />
        <div className='container text-center'>
         
            { loggedinuser ? 
            <><h3 className='mb-4'>Current user</h3><p>Name : {loggedinuser.displayName}</p><p>{loggedinuser.email}</p><p><b>Click the button below to log out!</b></p><button type='button' className='btn btn-alt btn-primary px-4 btn-color border-0 mt-4' onClick={so}>Sign Out</button></> 
             :
            <> <p><b>Click the button below to login with Google!</b></p><button type='button' className='btn btn-alt btn-primary px-4 btn-color border-0 mt-4' onClick={si}><i className="bi bi-google"></i> &nbsp; Google</button></>
            }
        </div>
</>
    );
};

export default Login;