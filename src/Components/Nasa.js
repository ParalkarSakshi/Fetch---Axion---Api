import React, {useState} from "react";

function Nasa() {

    const[nasaData,setNasaData] = useState([]);

    const apikey = 'lfI3CiH3IOK0FuiDe23Mw95br1mpToQaqrgeFfMw';

    function getData(){
        // fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10`)
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => setNasaData(data))
        .catch(error => console.log('Error fetching data:', error))

        console.log(nasaData);
    }

    return(
        <>
            <h1>Nasa picture of the day</h1>
            <button onClick={getData}>Get picture</button><br />
            
            <div>
            {
                nasaData.map(data =>
                    <div>
                        <img src={data.url} style={{maxWidth:'500px'}} />
                    </div>
                )
            }
            </div>
        </>
    );
}

export default Nasa;