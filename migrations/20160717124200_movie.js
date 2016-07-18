exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('category', function(table) {
            table.increments('id').primary();
            table.string('name');
        }),

        knex.schema.createTable('movie', function(table) {
            table.increments('id').primary();
            table.string('title');
            table.string('director');
            table.date('release_date');
            table.integer('category_id').references('id').inTable('category');
            table.timestamps();
        })

    ]);

};

exports.down = function(knex, Promise) {

    return Promise.all([
        knex.schema.dropTable('category'),
        knex.schema.dropTable('movie')
    ]);

};
