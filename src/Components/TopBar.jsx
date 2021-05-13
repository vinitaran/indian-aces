import React from 'react'
import "../Components/TopBar.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const TopBar = () => {
    return (
        <div className="topBar">            
            <div className="topBarCenter">
                <h2>Follow Us On: </h2>
                <a href="https://m.facebook.com/IndianAces/">
                    <FacebookIcon className="icon"/>
                </a>
                <a href="https://twitter.com/IndianAces_">
                    <TwitterIcon className="icon" />
                </a>
                <a href="https://www.instagram.com/indianaces_">
                    <InstagramIcon className="icon" />
                </a>
            </div>         
        </div>
    )
}

export default TopBar
