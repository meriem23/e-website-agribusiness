import React from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'


class Home extends React.Component {
  componentDidMount() {
    this.props.loadUser()
  }
  render() {
    return (
      <div className="MyContainer">
     
      </div>
    )
  }
}

export default connect(null, { loadUser })(Home)