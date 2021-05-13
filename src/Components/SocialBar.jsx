import React from 'react'
import "../Components/SocialBar.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const SocialBar = () => {
    return (
        <div className="Wrapper">
          <a href="https://m.facebook.com/IndianAces/">
                    <FacebookIcon className="icons"/>
                </a>
                <a href="https://twitter.com/IndianAces_">
                    <TwitterIcon className="icons" />
                </a>
                <a href="https://www.instagram.com/indianaces_">
                    <InstagramIcon className="icons" />
                </a>
        </div>
    )
}

export default SocialBar
