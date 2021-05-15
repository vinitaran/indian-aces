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
                    <h5>About Humans of Queer.</h5>
                </div>
                <div className="footer__middle">
                    <a href="https://m.facebook.com/IndianAces/">
                        <FacebookIcon style={{ color: "#1877F2" }} className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/indianaces_">
                        <InstagramIcon style={{ color: "#F6347C" }} className="icon" />
                    </a>
                    <a href="https://twitter.com/IndianAces_">
                        <TwitterIcon style={{ color: "#1A91DA" }} className="icon" />
                    </a>
                    

                </div>
                <div className="footer__right">
                    {/* <Button variant="contained" color="white">
                        Primary
                    </Button> */}
                    <Button type="submit" >Subscribe</Button>
                </div>
            </div>
        </div>
    )
};

export default Footer
