exports.up = function(knex) {
    return knex.schema
    .createTable("employees", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.boolean("is_assess").notNullable().default(false)
        table.integer('position_id').unsigned().notNullable();
        table.foreign('position_id').references('id').inTable('positions');

        table.integer('departament_id').unsigned().notNullable();
        table.foreign('departament_id').references('id').inTable('departaments');

        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("employees");
};