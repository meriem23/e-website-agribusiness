import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'


class Home extends React.Component {
  render() {
    return (
      <div >
        <Carousel>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/CarImg1.jpg"
              alt="First slide"
            />
          </Carousel.Item> */}
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
        <div className="MyContainer">

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