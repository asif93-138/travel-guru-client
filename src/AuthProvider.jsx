import React, {createContext, useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import app from './firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [loggedinuser, setLoggedinuser] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setLoggedinuser(currentUser); setLoading(false);
		});
		return () => {
			unsubscribe();
		}
	}, [])
	const authInfo = { loggedinuser, setLoggedinuser, loading};

	return (
	  <AuthContext.Provider value= {authInfo}>
		{children}
	  </AuthContext.Provider>
	);
};

export default AuthProvider;