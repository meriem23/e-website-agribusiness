import React, { Component } from "react"
import { Link } from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PhoneIcon from '@material-ui/icons/Phone'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="FooterContainer container">
                    <div className="row InContainer">
                        <div className="col-sm InCol">
                            <p className="FootDesc">
                                <span className="FootTitle">The Farm,</span><br /> Is an initiative which aims to bring all kind of farmers,
                            breeders and artisans closer to their direct consumers.
                           </p>
                            <div>
                                <a className="LinkFB" href="https://www.facebook.com"><FacebookIcon /></a>
                                <a className="LinkInsta" href="https://www.instagram.com"> <InstagramIcon /> </a>
                                <a className="LinkTwi" href="https://www.twitter.com"> <TwitterIcon /> </a>
                                <a className="LinkYou" href="https://www.youtube.com"> <YouTubeIcon />  </a>
                            </div>
                        </div>
                        <div className="col-sm InCol">
                            <p className="FootTitle">Quick Links</p>
                            <div>
                                <p className="TextContact">
                                    <Link id="FootLink" to="/register">Register Now</Link>
                                </p>
                                <p className="TextContact">
                                    <Link id="FootLink" to="/store">Store</Link>
                                </p>
                                <p className="TextContact">
                                    <Link id="FootLink" to="/blog">Blog</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm InCol">
                            <p className="FootTitle">Contact Us</p>
                            <div>
                                <p className="TextContact">
                                    <PhoneIcon className="LinkContact" />+216 73 214 057
                                </p>
                                <p className="TextContact">
                                    <AlternateEmailIcon className="LinkContact" />TheFarm@farmcorporation.com
                                </p>
                                <p className="TextContact">
                                    <LocationOnOutlinedIcon className="LinkContact" />92 Rue Andalousie, Sousse
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="CopyRi">Copyright © 2020 <span className="FootTitle">The Farm</span>
                 - All Rights Reserved.
                 </p>
            </div>
        )
    }
}
export default (Footer)