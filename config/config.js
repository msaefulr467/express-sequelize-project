require('dotenv').config();

const {
  DB_USERNAME,
  DB_NAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_DIALECT
} = process.env;

console.log('DB_DIALECT:', DB_DIALECT);  // Tambahkan log ini untuk debugging

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: DB_DIALECT
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: DB_DIALECT
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: DB_DIALECT
  }
};
