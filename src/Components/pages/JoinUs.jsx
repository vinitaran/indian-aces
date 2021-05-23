import React, {useState, useEffect} from 'react'

const JoinUs = () => {

    const [joinUs, setJointUs] = useState([]);

    useEffect(() => {
        const getDataFromDB = async () =>{
            await fetch("https://indian-aces.herokuapp.com/joinUs").then((response) => {
                return response.json();
                }).then((data) => {
                    setJointUs(data[0].details);
                });
        }
        getDataFromDB();
    }, []);

    console.log(joinUs);

    return (
        <div className="joinUs">
            <h1>Join Us</h1>
            <h2>{joinUs}</h2>
        </div>
    )
}

export default JoinUs
