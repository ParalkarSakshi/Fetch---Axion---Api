import React, { useState } from "react";

function Covid19() {

    const [covidData, setCovidData] = useState([])
    const [loading, setLoading] = useState(true);

    function fetchCovidData() {
        fetch('https://disease.sh/v3/covid-19/states')
            .then(res => res.json())
            .then(data => {
                setCovidData(data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
                setLoading(false);
            })
        console.log(covidData);
    }



    return (
        <>
            <h2>Covid19 Data</h2>

            <button onClick={fetchCovidData}>Fetch Covid Data</button>

            {/* <div>
                <ul>
                {
                    covidData.map((data)=>(
                        <p>
                        <li key={data.id}>
                            State: "{data.state}"
                        </li>
                        <li key={data.id}>
                            Cases: {data.cases}
                        </li>
                        <li key={data.id}>
                            Deaths: {data.deaths}
                        </li>
                        </p>
                    ))
                }
                </ul>
            </div> */}

            {loading && <p>Loading data...</p>}

            {!loading && covidData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {covidData.map(state => (
                            <tr key={state.state}>
                                <td>{state.state}</td>
                                <td>{state.cases.toLocaleString()}</td>
                                <td>{state.deaths.toLocaleString()}</td>
                                <td>{state.recovered ? state.recovered.toLocaleString() : 'N/A'}</td>
                                <td>{state.active.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}


        </>
    )
}

export default Covid19;