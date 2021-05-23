import React, { useState, useEffect }from 'react'
import "./Contact.css"
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
           <div className="contact_wrapper">
           <div className="contact_title"> <h2>Contact Us</h2></div>
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
        </div>
    )
}

export default Contact
