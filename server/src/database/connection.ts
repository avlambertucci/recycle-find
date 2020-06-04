import knex from 'knex';
import path from 'path';

'database/index.js'

const connection = knex({
    client: 'sqlite3',
    connection: {
        //select the path(directoy) from this file root (connection.ts) and the databae.sqlite file
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true
})

export default connection;