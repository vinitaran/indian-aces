import React, {useState, useEffect} from 'react'
import "./JoinUs.css"
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
            <div className="join_wrapper">
            <div className="join_title">
                <h1>Join Us</h1>
            </div>
            <div className="join_body">
                <h2>{joinUs}</h2>
            </div>
            </div>
        </div>
    )
}

export default JoinUs
