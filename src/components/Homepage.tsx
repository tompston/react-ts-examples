import React, { useState } from 'react'
import BurgerNavigation from '../assets/hamburger-menu.svg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { ExampleComponents } from './Components'

export default function Homepage() {
  // http://localhost:3000/01/ParentExample

  return (
    <div>
      <div className="page">
        {/* Example of a block that holds / creates the routes. 
        The <Link> elements can be used inside the <Router> block.*/}
        <Router>
          {/* <!-- LEFT  --> */}
          {/* <!-- LEFT  --> */}
          {/* <!-- LEFT  --> */}
          <div className="main_left_container">
            <div className="pl-36 pt-20">
              <div className="header-name fw-700 fs-6 pt-20 pb-40">React-Typescript Examples</div>
              <div className="header-links-box grid gap-32 fs-9 op-80">
                {/* Grid of Links */}
                {/* <Link className="remove-decoration" to="/">
                  Home
                </Link> */}
                {ExampleComponents.map((c) => {
                  return (
                    <Link className="remove-decoration" to={c.route} key={c.name}>
                      {c.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          {/* <!-- RIGHT --> */}
          {/* <!-- RIGHT --> */}
          {/* <!-- RIGHT --> */}
          <div className="main_right_container">
            <Switch>
              <div>
                {/* write exact before path so that there is no shik shirik  */}
                {/* without the for-loop, a Route Component will look could this 
                 <Route exact path="/counter" component={Counter} />*/}

                {ExampleComponents.map((c) => {
                  return <Route exact path={c.route} component={c.component} key={c.name} />
                })}
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  )
}
