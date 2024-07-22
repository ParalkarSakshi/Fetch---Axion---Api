import React, { useState } from "react";

function Form() {

    const[userName,setUserName] = useState('');
    const[userData,setUserData] = useState([]);

    function getData(){
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(error => console.log('Error fetching data:', error))

        console.log(userData);
    }

    return(
        <>

            <label>
                Username:
                <input 
                    placeholder="Enter Github Username"
                    value={userName} 
                    onChange={(e)=>setUserName(e.target.value)}
                />
            </label><br />

            <button onClick={getData}>Fetch Repos</button>

        <div>
            <ul>

            { 
                userData.map(repo =>
                    <div>
                        <li key={repo.id}>{repo.name} - {repo.description}</li>
                    </div>
            )}
            </ul>
        </div>
            
        </>
    );
}

export default Form;