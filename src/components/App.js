

import React from 'react'
import {BrowserRouter as Router,Route, Switch, Link } from "react-router-dom"

import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'

const App = () => {
  return (
    <Router>
        <nav>
            <Link id='form-link' to="/">Section 1</Link>
            <Link id = "form-ref-link" to="/ref"> Section 2</Link>
            <Link id = 'form-state-link' to ="/state"> Section 3</Link>
         </nav>

            <Switch>
            <Route exact path="/" component = {Form } />
             <Route path="/ref" component = {FormRef } />
              <Route path="/state" component = {FormState } />
            </Switch>
    </Router>
   
  )
}

export default App
