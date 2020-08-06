const Users = require('../models/users-model')
const bcrypt = require('bcryptjs')

function restrict() {
  const authError = { message: "Invalid Credentials" }
  return async (req, res, next) => {
    try {
      if (!req.session || !req.session.cookie) {
        return res.status(401).json(authError)
      }

      next()
    } catch (error) {
      next(error)
    }


    
  }
}

module.exports = restrict