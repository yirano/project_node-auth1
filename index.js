const express = require('express')
const helmet = require('helmet')
// const cors = require('cors')
const usersRouter = require('./routers/users-router')

const server = express()
const PORT = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use('/api/users', usersRouter)

server.use((error, req, res, next) => {
  console.dir(error)
  res.status(500).json({ errorMessage: "Something went wrong" })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})