import React from 'react';
import "../Components/Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer__main">
                <div className="footer__left">
                    <h2>About us.</h2>
                </div>
                <div className="footer__middle">
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
                <div className="footer__right">
                    <Button>Subscribe</Button> 
                </div>
            </div>
        </div>
    )
};

export default Footer
