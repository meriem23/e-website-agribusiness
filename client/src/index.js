import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Cart from './components/Cart'
import Home from './components/Home'
import Alerts from './components/Alerts'
import ProductUpload from './components/ProductUpload'
import MyStore from './components/MyStore'
import Footer from './components/Footer'
import SellerAccount from './components/SellerAccount'
import Blog from './components/Blog'
import ProductDescription from './components/ProductDescription'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Alerts />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={MyStore} />
        <Route exact path="/seller_account" component={SellerAccount} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/new_product" component={ProductUpload} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/product/:id" component={ProductDescription} />
      </Switch>
      <Footer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));