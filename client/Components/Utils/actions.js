import Axios from 'axios'

export const GET_USERS = 'GET_USERS'


export const getUsers = () => dispatch => {
  Axios.get('http://localhost:4000/api/users')
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}


