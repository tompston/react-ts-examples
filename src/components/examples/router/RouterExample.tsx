import React from 'react'
import CodeExample from '../../utils/CodeExample'

export default function RouterExample() {
  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="component-name header-3">Router Example</div>
          <div>In the source repo, the Router is created in the src/components/Homepage.tsx component</div>
          <CodeExample filename="RouterExample.tsx" code={code} />

          <CodeExample filename="Components.tsx snippet" code={codeSnippet} />

          {/*  */}
        </div>
      </div>
    </div>
  )
}

const code = `
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ExampleComponents } from "./Components";

export default function MyRouterComponent() {

  return (
    <div>

      {/* Example of a block that holds / creates the routes. 
      The <Link> elements can be used inside the <Router> block.
      <Link> Element can also be used from the components which are defined inside the <Router>
      In most cases the <Router> is created at one of the top-level components, so that the 
      Routes work in all of the parts of the app*/}

      <Router>

        {/* Everything before the <Switch>  block can be rendered by the browser. 
        The routes specified here can be accesed from the current component and 
        will not change when you navigate away from it*/}

        <div className="flex-center temp-bg-col-5 py-14">
          <div className="max-width-1">
            <div className="header-links-box flex gap-30 fs-9">

            {/* without the for-loop, a Link Component could look like this 
            <Link className="remove-decoration" to="/">Home</Link>*/}

              {ExampleComponents.map((c) => {
                return (
                  <Link to={c.route} key={c.name}>
                    {c.name}
                  </Link>
                );
              })}

            </div>
          </div>
        </div>

        {/* <Switch> Block will not be rendered, but will create the actual routes */}

        <Switch>
          <div>
            {/* write 'exact' before path so that there is no shik shirik  */}
            {/* without the for-loop, a Route Component could look like this 
            <Route exact path="/counter" component={Counter} />*/}

            {ExampleComponents.map((c) => {
              return (
                <Route
                  exact path={c.route}
                  component={c.component}
                  key={c.name}
                />
              );
            })}

            {/* The upper Route example can be also written in multiple lines, if you want */}
            {/* <Route exact path="/prop-example"><PropExample /></Route> */}
          </div>
        </Switch>

      </Router>
      
    </div>
  );
}
`

const codeSnippet = `
// array that holds objects with the information about the Components
export const ExampleComponents = [
  //  component   the imported Component
  //  name        name that will be used for Link
  //  route       url route for the component
  {
    component: Home,
    name: 'Home',
    route: '/',
  },

  {
    component: Counter,
    name: 'Counter',
    route: '/counter',
  },
  {
    component: ParentExample,
    name: 'Parent To Child Prop',
    route: '/parent-to-child-props',
  },
  {
    component: MyProjects,
    name: 'For Loops on Arrays',
    route: '/for-loops',
  },
  {
    component: UserInput,
    name: 'User Input',
    route: '/user-input',
  },
]
`
