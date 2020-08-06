import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import Axios from 'axios'

const userContainer = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    Axios.get('http://localhost:4000/api/users')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
  return (
    <div>

    </div>
  )
}

export default userContainer
