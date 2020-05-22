import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

class Home extends React.Component {
  render() {
    return (
      <div >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/CarImg1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/CarImg2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="MyHomeContainer">
          <div className="HomeText">
          <Link id="NavLinkItem" to="/register"><i className="fas fa-sign-in-alt RegisterColor"></i>  </Link>
            <p><span>Register</span> and get access to our content</p>
          </div>
          <div className="HomeText">
          <Link id="NavLinkItem" to="/store"><i className="fas fa-store StoreColor"></i></Link>
            <p>Visit our <span>Store</span> and discover our latest products</p>
          </div>
          <div className="HomeText">
          <Link id="NavLinkItem" to="/blog"> <i className="fas fa-bookmark BlogColor"></i></Link>
            <p>Get tips and advices from our <span>Blog</span> section</p>
          </div>
          {/* information below */}
          <div className="HomeInformation">
            <div className="CertifiedContainer">
              <i className="fas fa-certificate fa-3x"></i>
              <p className="InfoText">Certified Quality</p>
            </div>
            <div className="DeliveryContainer">
              <i className="fas fa-truck fa-3x"></i>
              <p className="InfoText">Free Delivery</p>
            </div>
            <div className="PaymentContainer">
              <i className="far fa-credit-card fa-3x"></i>
              <p className="InfoText">Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Home)