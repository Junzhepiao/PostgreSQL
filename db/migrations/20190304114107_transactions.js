
exports.up = function(knex, Promise) {
    return knex.schema.createTable('transactions', function(table) {
        table.increments();
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .onDelete('cascade')
            .notNullable();
        table.integer('amount');
        table.string('type');
        table.string('business_name');
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transactions')
};
