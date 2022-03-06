const db = require("../data/db-config")

const getAll = () => {
  //select  * from accounts
  return db("steps")
}

const getById = (id) => {
  //select * from accounts where id = 1;
  return db("steps").where("id", id).first()
}

module.exports = { getAll, getById }
