import React, {useEffect,useState} from 'react';

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
            <h1>About Us</h1>
            <h2>{aboutUs}</h2>
        </div>
    )
}

export default AboutUs;
