import React from 'react'
import './App.css'
import setAuthToken from './utils/setAuthToken'
import { connect } from 'react-redux'
import { loadUser } from './actions/AuthActions'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
class App extends React.Component {
  componentDidMount(){
    this.props.loadUser()
  }
  render() {
    return (
      <div>
        <p>my home page is the app</p>
      </div>
    )
  }
}

export default connect(null, {loadUser})(App)
