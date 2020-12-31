module.exports = {
  development: {
    database: 'fpr_league_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'fpr_league_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
