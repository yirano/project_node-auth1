exports.seed = async function (knex) {

  await knex('users').insert([
    { username: "sara", password: "password" },
    { username: "bob", password: "password" }
  ])
}