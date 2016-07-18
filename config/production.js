module.exports = {
    port: 8080,
    appName: 'apitest-prod',
    env: 'production',
    db: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: null,
            database: 'koapi_prod'
        }
    },
    migration: {
        directory: './config/migrations'
    }
}
