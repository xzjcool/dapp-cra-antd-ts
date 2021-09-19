import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { RouteProgress } from '../components/RouteProgress'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

export const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<RouteProgress />}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/About" component={About} />
      </Suspense>
    </Switch>
  )
}
