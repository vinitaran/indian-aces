import React from 'react'
import "../Components/SocialBar.css"
import {Container, Segment} from "semantic-ui-react";
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, EmailShareButton, RedditShareButton} from "react-share";
import {FacebookIcon, WhatsappIcon, TwitterIcon, EmailIcon, RedditIcon} from "react-share";

const SocialBar = () => {
    return (
        <div className="Wrapper">
          <Container>
              <Segment>
                  <FacebookShareButton url="https://www.fawcettsociety.org.uk/" quote={"Inspire through your Story"} hashtag="#PrideMonth" >
                    <FacebookIcon size={32} logoFillColor="white" ></FacebookIcon>
                  </FacebookShareButton>
                  <WhatsappShareButton url="https://www.fawcettsociety.org.uk/" title="Humans Of Queer" separator=":: " >
                    <WhatsappIcon size={32} />
                  </WhatsappShareButton>
                  <TwitterShareButton url="https://www.fawcettsociety.org.uk/" title="Humans Of Queer" >
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <EmailShareButton url="https://www.fawcettsociety.org.uk/" subject="Humans Of Queer" body="body" >
                        <EmailIcon size={32} />
                    </EmailShareButton>
                    <RedditShareButton url="https://www.fawcettsociety.org.uk/" title="Humans Of Queer" windowWidth={660} windowHeight={460} >
                        <RedditIcon size={32} />
                    </RedditShareButton>
              </Segment>
          </Container>
        </div>
    )
}

export default SocialBar
