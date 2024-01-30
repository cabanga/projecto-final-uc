import knex from 'knex'
import { knexfile } from '../../knexfile'

const DATABASE = knex(knexfile)
export { DATABASE }


/*
const env = process.env

const DATABASE = knex({
    client: 'mysql2',
    connection: {
        host     : env.DB_HOST,
        port     : env.DB_PORT,
        user     : env.DB_USER,
        password : env.DB_PASSWORD,
        database : env.DB_DATABASE
    },
    migrations: {
        directory: './src/db/migrations'
    },
})

export { DATABASE }
*/
