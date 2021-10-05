import { Switch, Route } from 'react-router-dom'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/checkout" component={Checkout}/>
  </Switch>
)