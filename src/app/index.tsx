import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}