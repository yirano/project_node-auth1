const express = require('express')
const Users = require('../models/users-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    res.json(await Users.getUsers())
  } catch (error) {
    next(error)
  }
})

router.get('/logout', async (req, res, next) => {
  try {
    req.session.destroy(err => {
      if (err) {
        next(err)
      } else {
        res.status(204).end()
      }
    })
  } catch (error) {

  }
})

module.exports = router