import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import '../global.scss'

class XploreRoot extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/yo" component={() => (
            <p>no </p>
          )}/>
          <Route exact
            path="/home"
            component={Home}
          />
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default XploreRoot
