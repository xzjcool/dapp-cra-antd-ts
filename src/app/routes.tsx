import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Progress } from '../components/Progress'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

export const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<Progress />}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/About" component={About} />
      </Suspense>
    </Switch>
  )
}
