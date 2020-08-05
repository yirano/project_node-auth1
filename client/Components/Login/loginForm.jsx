import React, { useState } from 'react'
import Axios from 'axios'

const loginForm = (props) => {
  const [login, setLogin] = useState()

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    Axios.post('http://localhost:4000/api/guest/login', login)
      .then(res => {
        console.log(res)
        localStorage.setItem('fake', 'Some stuff')
        props.history.push('/api/users')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default loginForm
