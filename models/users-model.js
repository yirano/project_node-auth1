const db = require('../data/config')

async function getUsers() {
  return await db('users')
}

function findBy(filter) {
  console.log(filter)
  return db('users')
    .select('id', 'username', 'password')
    .where(filter)
}

async function add(user) {
  const [id] = await db("users").insert(user)
  return findById(id)
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first()
}

module.exports = {
  getUsers,
  findBy,
  add,
  findById
}