import React, { useState } from 'react';
import Navbar from './navbar'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
import './App.css';
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Login from './login'
import Signup from './Signup'
import Profile from './profile'
import Video from './Video'

function error() {
  return (
    <div class="container1">
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to="/">Go back home</Link>
    </div>
  )
}
function App() {
  const [myb, setmyb] = useState(false)
  var mybtn = document.getElementById('mybtn')
  window.onscroll = function () { scrollfunction() }
  function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setmyb(true)
    }
    else {
      setmyb(false)

    }
  }
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
        <Route path='/video' component={Video} />
        <Route path='/cart' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route component={error} />
      </Switch>
      {myb == true ? <svg width="2.5em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={topFunction} id="mybtn">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z" />
      </svg> : null}

    </BrowserRouter>
  );
}

export default App;

