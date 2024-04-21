import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import HeaderAlt from './HeaderAlt';
import photo from '../public/star_1_.png';
import photo1 from '../public/Rectangle 26.png';
import photo2 from '../public/Rectangle 27.png';
import photo3 from '../public/Rectangle 28.png';

const Details = () => {
    const place = useLoaderData();

    const {bookingInfo} = useContext(AuthContext);
    // console.log(bookingInfo);
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('https://travel-guru-server-red-xi.vercel.app/hotels')
        .then(res => res.json())
        .then(res => setHotels(res))
    }, [])

    console.log();
    return (
<div>
    <HeaderAlt />
    <div className='container text-center'>
    <h4>Trip Details </h4>
                <div className='d-sm-flex justify-content-center'><div><span className='mx-2'><b>Origin :</b> {bookingInfo.origin}</span><span className='mx-2'><b>Destination :</b> {bookingInfo.destination}</span></div>
                <div><span className='mx-2'><b>From :</b> {bookingInfo.from}</span><span className='mx-2'><b>To :</b> {bookingInfo.to}</span></div></div>
    </div>
<div className='container d-sm-flex justify-content-between my-5'>
            <div className='ms-4 ms-sm-0'>
<h4 className=''>Stay in {bookingInfo.destination}</h4>

{hotels.length  && 
<>
<div className='d-sm-flex mb-5'>
    <img src={photo1} className='img-hotel' />
    <div className='p-sm-4'>
        <h5 className='m-0'>{hotels[0].name}</h5>
        <p className='m-0'><small>4 guests 2 bedrooms 2 beds 2 baths</small></p>
        <p className='m-0'><small>Wif Air conditioning Kitchen</small></p>
        <p className='m-0'><small>Cancellation flexibility available</small></p>
        <p className='m-0'><img src={photo} className='star-rating' /> <small>4.9(20) &nbsp; <b>${hotels[0].price[0]}/night</b> &nbsp; <b>${hotels[0].price[1]}/total</b></small></p>
    </div>
</div>
<div className='d-sm-flex mb-5'>
    <img src={photo2} className='img-hotel' />
    <div className='p-sm-4'>
        <h5 className='m-0'>{hotels[1].name}</h5>
        <p className='m-0'><small>4 guests 2 bedrooms 2 beds 2 baths</small></p>
        <p className='m-0'><small>Wif Air conditioning Kitchen</small></p>
        <p className='m-0'><small>Cancellation flexibility available</small></p>
        <p className='m-0'><img src={photo} className='star-rating' /> <small>4.9(20) &nbsp; <b>${hotels[1].price[0]}/night</b> &nbsp; <b>${hotels[1].price[1]}/total</b></small></p>
    </div>
</div>
<div className='d-sm-flex mb-5'>
    <img src={photo3} className='img-hotel' />
    <div className='p-sm-4'>
        <h5 className='m-0'>{hotels[2].name}</h5>
        <p className='m-0'><small>4 guests 2 bedrooms 2 beds 2 baths</small></p>
        <p className='m-0'><small>Wif Air conditioning Kitchen</small></p>
        <p className='m-0'><small>Cancellation flexibility available</small></p>
        <p className='m-0'><img src={photo} className='star-rating' /> <small>4.9(20) &nbsp; <b>${hotels[2].price[0]}/night</b> &nbsp; <b>${hotels[2].price[1]}/total</b></small></p>
    </div>
</div>
</>
}
            </div>
<div>

<p><b>Find locations in map below: </b></p>
            <iframe src={place.mapURL} className='border-0 iframe-sizing mb-4' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                
             
                
</div>
        </div>
</div>
    );
};

export default Details;
