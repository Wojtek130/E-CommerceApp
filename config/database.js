const Sequelize = require('sequelize');

const mode = process.env.MODE || 'development';
const dialect = process.env.DB_DIALECT || 'postgres';
const database = process.env.DB_DATABASE || 'shopdb';
const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || 'root';

const connectionObject = {
    host: process.env.DB_HOST ||  'localhost',
    dialect, // 'mysql'|'sqlite'|'postgres'|'mssql',

};

const sequelize = new Sequelize(database, username, password, connectionObject);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../models/user.model')(sequelize, Sequelize);
// here db associations

module.exports = db;