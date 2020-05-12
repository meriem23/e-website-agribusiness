import React from 'react'
import './App.css'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
class App extends React.Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App
