import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Details = () => {
    const place = useLoaderData();
    function bDet(event) {
        event.preventDefault();
        console.log(document.getElementsByTagName('form')[0].children[0].value, document.getElementsByTagName('form')[0].children[1].value, document.getElementsByTagName('form')[0].children[2].value, document.getElementsByTagName('form')[0].children[3].value);
        document.getElementsByTagName('form')[0].classList.add('none');
        document.getElementsByTagName('div')[2].innerHTML = `
        <p>Origin: ${document.getElementsByTagName('form')[0].children[0].value}</p>
        <p>Destination: ${document.getElementsByTagName('form')[0].children[1].value}</p>
        <p>From: ${document.getElementsByTagName('form')[0].children[2].value}</p>
        <p>To: ${document.getElementsByTagName('form')[0].children[3].value}</p>
        <p>Available hotels are shown below.</p> 
        `;
    }
    function setLimit() {
        const minDate = document.getElementsByTagName('input')[2].value;
        document.getElementsByTagName('input')[3].min = minDate;
        
    }
    return (
        <div>
            <h2>{place.id}.  Name : {place.name}</h2>
            <form onSubmit={bDet}>
                <input type='text' />
                <input type='text' defaultValue={place.name} readOnly/>
                <input type="date" onBlur={setLimit} />
                <input type="date" />
                <button>Start Booking</button>
            </form>
            <div></div>
            <p>Find locations in map below: </p>
            <iframe src={place.mapURL} width="500" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Details;