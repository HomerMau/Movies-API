exports.up = knex => knex.schema.createTable("movie_tags", table => {
  table.increments("id");

  table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");
  table.varchar("name")
});

exports.down = knex => knex.schema.dropTable("tags");