import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';



function App() {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch('https://travel-guru-server-red-xi.vercel.app/data')
    .then(res => res.json())
    .then(data => setSpots(data))
  }, [])
  const {loggedinuser} = useContext(AuthContext);
  console.log(loggedinuser);
  return (
    <>
      
       {spots.map(x => <p key={x.id}>{x.id}.  Name : {x.name} <br /><br /> <button><Link to={`/details/${x.id}`}>Details</Link></button></p>)}
     
    </>
  )
}

export default App

