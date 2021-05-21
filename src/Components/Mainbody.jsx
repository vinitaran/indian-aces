import React, {useEffect, useState} from 'react';
import "../Components/Mainbody.css";
import {Link} from "react-router-dom";

const Mainbody = () => {

    const [userData, setUserData] = useState([]);
    const [userDataFromDB, setUserDataFromDB] = useState([]);

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
        const getDataFromDB = async () =>{
            await fetch("https://indian-aces.herokuapp.com/photoGallery").then((response) => {
                return response.json();
                }).then((data) => {
                    setUserDataFromDB(data);
                });
        }
        getData();
        getDataFromDB();
    }, []);

    
    console.log(userDataFromDB);

    return (
        <div className="mainbody">
            <div className="body__main">
                {/* {
                    userData.map((element) => {
                        return(
                            <div className="body__elements">
                                <img className="body__elements__image" alt="" src={element.picture.large} />
                                <div className="body__elements__info"><h2>{element.name.first}</h2></div>
                            </div>
                        )
                    })
                }    */}
                {
                    userDataFromDB.map((element) => {
                        return(
                            <Link to={`/${element._id}`} className="body__elements">
                                <img className="body__elements__image" alt="" src={element.homeImage ? element.homeImage : "https://cdn1.iconfinder.com/data/icons/essential-21/128/User-512.png"} />
                                <div className="body__elements__info"><h2>{element.name}</h2></div>
                            </Link>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Mainbody
