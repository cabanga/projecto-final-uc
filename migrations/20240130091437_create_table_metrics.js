exports.up = function(knex) {
    return knex.schema
    .createTable("metrics", (table) => {
        table.increments("id").primary();
        table.string("descriptions").notNullable();
        table.integer("score").notNullable().default(10);
        table.integer('goal_id').unsigned().notNullable();
        table.foreign('goal_id').references('id').inTable('goals');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("metrics");
};