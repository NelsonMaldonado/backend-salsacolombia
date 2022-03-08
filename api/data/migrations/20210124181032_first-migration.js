exports.up = async (knex) => {
  await knex.schema.createTable("steps", (steps) => {
    steps.increments("id")
    steps.string("stepname", 200).notNullable()
    steps.string("website", 200).notNullable()
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("steps")
}
