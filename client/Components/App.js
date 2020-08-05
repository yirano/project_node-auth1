import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login/loginForm'
import Users from './User/userContainer'

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Link to="/users">Users</Link>
      <Login />
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  )
}

export default App
