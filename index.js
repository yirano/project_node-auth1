const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const db = require('./data/config')
const restrict = require('./middlewares/restrict')
const usersRouter = require('./routers/users-router')
const userActivity = require('./routers/guest-router')

const server = express()
const PORT = process.env.PORT || 4000

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "It's a secret!",
  store: new KnexSessionStore({
    knex: db,
    createTable: true,
  })
}))


server.use('/api/users', restrict(), usersRouter)
server.use('/api/guest', userActivity)

server.use((error, req, res, next) => {
  console.dir(error)
  res.status(500).json({ errorMessage: "Something went wrong" })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})