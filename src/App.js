import './App.css'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/ebank/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
