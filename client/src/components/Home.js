import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import Carousel from 'react-bootstrap/Carousel'


class Home extends React.Component {
  constructor(props) {
    super(props);
}
componentDidMount() {
    this.props.loadUser()
}
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

export default connect(mapStateToProps, { loadUser })(Home)