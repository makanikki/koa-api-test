module.exports = {
    port: 1337,
    appName: 'apitest',
    env: 'development',
    db: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: null,
            database: 'koapi_dev'
        }
    },
    migration: {
        directory: './config/migrations'
    }
}
