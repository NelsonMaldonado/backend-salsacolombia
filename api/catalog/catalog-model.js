const db = require("../data/db-config")

const getAll = () => {
  //select  * from accounts
  return db("steps")
}

const getById = (id) => {
  //select * from accounts where id = 1;
  return db("steps").where("id", id).first()
}

const create = async (step) => {
  // insert into accounts (name, budget) values ('foo',1000)
  const [id] = await db("steps").insert(step)
  return getById(id)
}

module.exports = { getAll, getById, create }
