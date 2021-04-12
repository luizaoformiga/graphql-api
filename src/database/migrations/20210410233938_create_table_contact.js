export function up(knex) {
  return knex.schema.createTable('contact', table => {
    table.increments('id').primary();
    table.string('name').notnull();
    table.string('email').notnull().unique();
    table.string('telefone').notnull();
  })
}

export function down(knex) {
  return knex.schema.dropTable('contact');
}
