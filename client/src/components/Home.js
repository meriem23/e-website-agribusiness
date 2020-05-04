import React from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import { Carousel } from 'react-bootstrap'

class Home extends React.Component {
  componentDidMount() {
    this.props.loadUser()
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/F1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/F2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/F3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default connect(null, { loadUser })(Home)