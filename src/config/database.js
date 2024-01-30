const knex = require('knex')
const configs = require('../../knexfile')

const DATABASE = knex(configs.development);
module.exports = DATABASE