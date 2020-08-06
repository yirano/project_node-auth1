import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login/loginForm'
import Users from './User/userContainer'
import { axiosWithAuth } from './Utils/axiosWithAuth'

const App = () => {
  const logOut = e => {
    axiosWithAuth().get('http://localhost:4000/api/users/logout')
    .then(res=> {
      console.log(res)
    })
    .catch(err=> {
      console.log(err)
    })
  }
  return (
    <div>
      <h1>App Component</h1>
      <Link to="/users">Users</Link>
      <Link to="/login">Log In</Link>
      <button onClick={logOut}>Log Out</button>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path = "/login">
          <Login />
        </Route>

      </Switch>
    </div>
  )
}

export default App
