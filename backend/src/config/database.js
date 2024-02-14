import knex from 'knex'
import configs from '../../knexfile.js'

const DATABASE = knex(configs.development)
export default DATABASE
