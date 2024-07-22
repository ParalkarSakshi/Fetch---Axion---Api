import React, { useState } from "react";

function Moive() {

    const [moive, setMoive] = useState('')
    const [moiveData, setmoiveData] = useState('');
    const [loading, setLoading] = useState(true);

    const apikey = 'bf71b7fe';

    function fetchMoiveData() {
        setMoive('');
        fetch(`http://www.omdbapi.com/?t=${moive}&apikey=${apikey}`)
            .then(res => res.json())
            .then(data => { setmoiveData(data); setLoading(false) })
            .catch(error => {
                console.log('Error fetching data', error);
                setLoading(false);
            })

        console.log(moiveData);
    }

    return (
        <>
            <h2>Moives Data</h2>

            <input
                type="text"
                value={moive}
                placeholder="Enter the moive name"
                onChange={(e) => setMoive(e.target.value)}
            /><br />

            <button onClick={fetchMoiveData}>Show moive data</button>

            {loading && <p>Loading data...</p>}

            <div>
                <h2><b>Moive name:</b> {moiveData.Title}</h2>
                <p><b>Year:</b>{moiveData.Year}</p>
                <p><b>Genre:</b>{moiveData.Genre}</p>
                <p><b>Director:</b>{moiveData.Director}</p>
                <p><b>Plot:</b>{moiveData.Plot}</p>
                <img src={moiveData.Poster} alt={moiveData.Title} />
            </div>


        </>
    );
}

export default Moive;