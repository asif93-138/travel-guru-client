import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


function App() {
  setTimeout(function() {
    document.getElementsByClassName('main-bg-img')[0].style.minHeight = `${screen.height}px`;
}, 2000)
  const { loggedinuser, setBookingInfo } = useContext(AuthContext);
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();
  // console.log(loggedinuser);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch('https://travel-guru-server-red-xi.vercel.app/data')
      .then(res => res.json())
      .then(data => setSpots(data))
  }, [])
  function booking(id) {
    // console.log('booked', id);
    setInfo(id);
    document.getElementById('one').classList.remove('d-flex');
    document.getElementById('one').classList.add('d-none');
    document.getElementById('two').classList.remove('d-none');
    document.getElementById('two').classList.add('d-flex');
    document.getElementsByTagName('h1')[0].innerHTML = id.name;
    document.getElementsByTagName('input')[2].value = id.name;
  }
  function setLimit() {
    const minDate = document.getElementsByTagName('input')[3].value;
    document.getElementsByTagName('input')[4].min = minDate;
  }
  function bDet(event) {
    event.preventDefault();
    const bookingData = {
      origin: document.getElementsByTagName('input')[1].value,
      destination: document.getElementsByTagName('input')[2].value,
      from: document.getElementsByTagName('input')[3].value,
      to: document.getElementsByTagName('input')[4].value
    };
    setBookingInfo(bookingData);
    // console.log(bookingData);
    navigate(`/details/${info.id}`);
  }
  return (
    <div className='main-bg-img pb-5' style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://i.ibb.co/ngs1Cmy/Rectangle-1.png)'}}>
      <Header />
      <div className='container pb-5'>
        <div id='one' className='d-flex justify-content-between'>

          {spots.map(x => <div style={{ backgroundImage: `url(${x.bgURL})`}} className='text-white place-boxes text-center rounded-5' key={x.id}> <h3 className='ttm'>{x.name}</h3> <br /> <button onClick={() => { booking(x) }} type='button' className='btn btn-primary px-4 btn-color border-0'>Booking <i className="bi bi-arrow-right"></i></button></div>)}

        </div>
        <div id='two' className='d-none text-white justify-content-between'>
          <div className='w-50'><h1 className='fs-h1'></h1>
          <small className='ts-color'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</small></div>
          <form onSubmit={bDet} className='form-styling p-4 rounded'>

            <p>Origin :</p>
            <input className='bg-light w-100 border-0 fw-bold' type='text' placeholder='From where you want to start..' /><br />
            <p>Destination :</p>
            <input className='bg-light w-100 border-0 fw-bold' type='text' readOnly /><br />
            <div className='d-flex'>
              <div className='mx-1'><p>From : </p>
                <input type="date" className='bg-light border-0 fw-bold' onBlur={setLimit} /><br /></div>
              <div className='mx-1'><p>To : </p>
                <input type="date" className='bg-light border-0 fw-bold' /><br /><br /></div>
            </div>
            <button type='submit' className='w-100 mt-2 btn-dp btn btn-primary px-4 btn-color border-0'>Start Booking</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App

