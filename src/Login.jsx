import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from './firebase.init';
import { AuthContext } from './AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';




const Login = () => {
    const {loggedinuser, setLoggedinuser} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = useLocation().state?.from.pathname || '/';
    console.log(loggedinuser);
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
        <div>
         
            { loggedinuser ? 
            <><p>{loggedinuser.displayName}</p><p>{loggedinuser.email}</p><button onClick={so}>Sign Out</button></> 
             :
            <> <p>Please, log in!!!</p><button onClick={si}>Sign in with Google</button></>
            }
        </div>
    );
};

export default Login;