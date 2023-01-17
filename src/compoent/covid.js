import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {
    const [data, setData] = useState([0]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            setData(actualData.statewise[0])
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    },[]);
  return (
    <div class="covidTrack">
        <h1>live</h1>
        <h2>covid-19 coronavirus tracker</h2>
        <ul>
            <li>
                <p>Our Country</p>
                <h1>India</h1>
            </li>
            <li>
                <p>Our recovered</p>
                <h1>{data.recovered}</h1>
            </li>
            <li>
                <p>Our deaths</p>
                <h1>{data.deaths}</h1>
            </li>
            <li>
                <p>Our Confirmed</p>
                <h1>{data.confirmed}</h1>
            </li>
            <li>
                <p>Our active</p>
                <h1>{data.active}</h1>
            </li>
            <li>
                <p>Our last update</p>
                <h1>{data.lastupdatedtime}</h1>
            </li>
        </ul>
        
    </div>
  )
}

export default Covid