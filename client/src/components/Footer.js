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
            <footer className="container">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-4 d-flex justify-content-md-center social">
                        <p className="FootDesc">
                            <span className="FootTitle">The Farm,</span><br /> Is an initiative which aims to bring all kind of farmers<br />
                            breeders and artisans closer to their direct consumers.
                        </p>
                        <ul className="list-unstyled">
                            <li className="LinksFooter">
                                <a className="LinkFB" href="https://www.facebook.com"><FacebookIcon /></a>
                                <a className="LinkInsta" href="https://www.instagram.com"> <InstagramIcon /> </a>
                                <a className="LinkTwi" href="https://www.twitter.com"> <TwitterIcon /> </a>
                                <a className="LinkYou" href="https://www.youtube.com"> <YouTubeIcon />  </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-50 d-md-none" />
                    <div className="col-md-4 mb-md-0 mb-4 LinksFooter">
                        <p className="FootTitle">Quick Links</p>
                        <ul className="list-unstyled linksElements">
                            <li className="TextContact">
                                <Link id="FootLink" to="/register">Register Now</Link>
                            </li>
                            <li className="TextContact">
                                <Link id="FootLink" to="/store">Store</Link>
                            </li>
                            <li className="TextContact">
                                <Link id="FootLink" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-50 d-md-none" />
                    <div className="col-md-4 mb-md-0 mb-4 LinksFooter">
                        <p className="FootTitle">Contact Us</p>
                        <ul className="list-unstyled footlist ">
                            <li className="TextContact">
                                <PhoneIcon className="LinkContact" />+216 73 214 057
                            </li>
                            <li className="TextContact">
                                <AlternateEmailIcon className="LinkContact" />TheFarm@farmcorporation.com
                            </li>
                            <li className="TextContact">
                                <LocationOnOutlinedIcon className="LinkContact" />92 Rue Andalousie, Sousse
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                    <hr />
                    <p className="CopyRi">  © {new Date().getFullYear()} Copyright<span className="FootTitle">The Farm</span>
                 - All Rights Reserved.
                 </p>
                    <p className="CopyRi"> Built by <span className="FootTitle">Meriem Esra M'sallem</span>
                    </p>
                </div>
            </footer>
        )
    }
}
export default (Footer)