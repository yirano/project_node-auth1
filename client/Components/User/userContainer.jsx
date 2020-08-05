import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth'

const userContainer = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    axiosWithAuth().get('http://localhost:4000/api/users')
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
