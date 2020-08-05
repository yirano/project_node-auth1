const router = require('express').Router()
const Users = require('../models/users-model')

router.get('/', async (req, res, next) => {
  try {
    res.json(await Users.getUsers())
  } catch (error) {
    next(error)
  }
})

module.exports = router