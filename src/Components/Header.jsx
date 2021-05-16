import React , {useState} from 'react';
import "../Components/Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
// import WebFont from 'webfontloader';


const Header = () => {

    const [input, setInput] = useState("");

    const getInputValue = () =>{
        console.log(input);
    }

    return (
        <div className="header">
            <div className="headerCenter">
                <div className="header__left">
                    <div className="logo">
                        <Link to="/">
                            <img alt="Header Logo" className="headerLogo" src="https://image.flaticon.com/icons/png/128/2041/2041212.png" />
                        </Link>
                    </div>
                    <div className="headerMotto">
                        <h2>Inspire through your Story</h2>
                    </div>
                </div>
                <div className="header__right">
                    <div className="headerButton">
                            <Link to="/">
                                <Button className="button" type="submit" >Submit Your Story</Button>
                            </Link>
                    </div>
                    <div className="header_search">
                        <div className="header_input">
                            <input value={input} onChange={(e) => setInput(e.target.value)} className="MessageSender_input" placeholder="Search" type="text" size="6" />
                            <SearchIcon className="searchButton" onClick={getInputValue} />
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Header
