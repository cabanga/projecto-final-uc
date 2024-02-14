exports.up = function(knex) {
    return knex.schema
    .createTable("assessments", (table) => {
        table.increments("id").primary();
        table.boolean("was_finish").notNullable().default(false)
        table.integer('employee_id').unsigned().notNullable();
        table.foreign('employee_id').references('id').inTable('employees');
        table.integer('metric_id').unsigned().notNullable();
        table.foreign('metric_id').references('id').inTable('metrics');

        table.integer('employee_score').default(0).notNullable();
        table.integer('supervisor_score').default(0).notNullable();
        table.integer('media_score').default(0).notNullable();

        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("assessments");
};