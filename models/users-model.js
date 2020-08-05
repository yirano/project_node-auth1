const db = require('../data/config')

async function getUsers() {
  return await db('users')
}

module.exports = {
  getUsers,
}