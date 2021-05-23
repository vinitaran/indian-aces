import React, { useState, useEffect }from 'react'

const Contact = () => {
    const [contactUs, setContactUs] = useState([]);

    useEffect(() => {
        const getDataFromDB = async () =>{
            await fetch("https://indian-aces.herokuapp.com/contactUs").then((response) => {
                return response.json();
                }).then((data) => {
                    setContactUs(data);
                });
        }
        getDataFromDB();
    }, []);

    console.log(contactUs);

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            {
                contactUs.map((element) => {
                    return(
                        <div className="contactDetails">
                            <h1>{element.name}</h1> 
                            <p>{element.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Contact
