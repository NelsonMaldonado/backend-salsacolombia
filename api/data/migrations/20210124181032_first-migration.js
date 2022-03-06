exports.up = async (knex) => {
  await knex.schema.createTable("steps", (steps) => {
    steps.increments("id")
    steps.string("stepname", 200).notNullable()
    steps.string("website", 200).notNullable()
    steps.string("picture", 200).notNullable()
    steps.string("videos", 200).notNullable()
    steps.timestamps(false, true)
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("steps")
}
