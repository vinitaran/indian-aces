import React, {useEffect, useState} from 'react';
import "../Components/Mainbody.css";

const Mainbody = () => {

    const [userData, setUserData] = useState([]);

    // const getData = async () =>{
    //     const response = await fetch('https://randomuser.me/api/?results=35');
    //     const data = await response.json();
    //     setUserData(data.results);
    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    useEffect(() => {
        const getData = async () =>{
            await fetch("https://randomuser.me/api/?results=36").then((response) => {
                return response.json();
                }).then((data) => {
                    setUserData(data.results);
                });
        }
        getData();
    }, []);

    
    console.log(userData);

    return (
        <div className="mainbody">
            <div className="body__main">
                {
                    userData.map((element) => {
                        return(
                            <div className="body__elements">
                                <img className="body__elements__image" alt="" src={element.picture.large} />
                                <div className="body__elements__info"><h2>{element.name.first}</h2></div>
                            </div>
                        )
                    })
                }   
            </div>
            
        </div>
    )
}

export default Mainbody
