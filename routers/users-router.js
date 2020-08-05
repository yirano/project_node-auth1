const express = require('express')
const Users = require('../models/users-model')
const bcrypt = require('bcryptjs')
const restrict = require('../middlewares/restrict')

const router = express.Router()

router.get('/', restrict(), async (req, res, next) => {
  try {
    res.json(await Users.getUsers())
  } catch (error) {
    next(error)
  }
})

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await Users.findBy({ username }).first()

    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      })
    }

    const newUser = await Users.add({
      username,
      // hash the password with a time complexity of "10"
      password: await bcrypt.hash(password, 14),
    })

    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  const authError = { message: "Invalid Credentials" }

  try {

    const user = await Users.findBy({ username }).first()

    console.log("USER", user)
    if (!user) {
      return res.status(401).json(authError)
    }

    // const passwordValid = await bcrypt.compare(password, user.password)

    // if (!passwordValid) {
    //   return res.status(401).json(authError)
    // }

    req.session.user = user
    res.json({ message: `Welcome ${user.username}! ID: ${user.id}` })

  } catch (error) {
    next(error)
  }
})

module.exports = router