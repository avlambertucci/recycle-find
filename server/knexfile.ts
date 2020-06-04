import path from 'path'

module.exports = {
    client: 'sqlite3',
    connection: {
        //select the path(directoy) from this file root (connection.ts) and the databae.sqlite file
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        //select the path for migrations directory
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true
};

//npx knex migrate:latest --knexfile.ts migrate:latest
// if the knexfile.ts
// is in another directory we have to explict the path in the command
// We have to create useNullAsDefault: true to stop the warning