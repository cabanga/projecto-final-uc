exports.up = function(knex) {
    return knex.schema
    .createTable("departaments", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("descriptions").notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("departaments");
};