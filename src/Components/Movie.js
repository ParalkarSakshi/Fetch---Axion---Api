import axios from "axios";
import React, { useState } from "react";

function Movie() {

    const [movie, setMovie] = useState('')
    const [movieData, setmovieData] = useState('');
    const [loading, setLoading] = useState(true);

    const apikey = 'bf71b7fe';

    function fetchMoiveData() {
        setMovie('');

        axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=${apikey}`)
            .then(res => {
                setmovieData(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data', error);
                setLoading(false);
            })
    }

    return (
        <>
            <h2>Movie Data</h2>

            <input
                type="text"
                value={movie}
                placeholder="Enter the moive name"
                onChange={(e) => setMovie(e.target.value)}
            /><br />

            <button onClick={fetchMoiveData}>Show movie data</button>

            {loading && <p>Loading data...</p>}


            <div>
                {
                    !loading && movieData  && movieData.Title ?
                        (
                            <div>
                                <h2><b>Movie name:</b> {movieData.Title}</h2>
                                <p><b>Year:</b>{movieData.Year}</p>
                                <p><b>Genre:</b>{movieData.Genre}</p>
                                <p><b>Director:</b>{movieData.Director}</p>
                                <p><b>Plot:</b>{movieData.Plot}</p>
                                <img src={movieData.Poster} alt={movieData.Title} />
                            </div>
                        ) : (
                            !loading && <p>Movie not found</p>
                        )
                }
            </div>


        </>
    );
}

export default Movie;