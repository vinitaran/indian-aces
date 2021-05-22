import React, {useEffect,useState} from 'react';
import "./AboutUs.css"

const AboutUs = () => {

    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        const getDataFromDB = async () =>{
            await fetch("https://indian-aces.herokuapp.com/aboutUs").then((response) => {
                return response.json();
                }).then((data) => {
                    setAboutUs(data[0].details);
                });
        }
        getDataFromDB();
    }, []);

    console.log(aboutUs);

    return (
        <div className="aboutUs">
            <div className="aboutUs_wrapper">
            <div className="aboutUs_title"><h1>About Us</h1></div>
           <div className="aboutUs_body"> <h2>{aboutUs}</h2></div>
            </div>
        </div>
    )
}

export default AboutUs;
