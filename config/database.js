const mode = process.env.MODE || 'development';
const dialect = process.env.DB_DIALECT || sequelizeConfig[mode].dialect || 'postgres';
const database = process.env.DB_DATABASE || sequelizeConfig[mode].database || 'shopdb';
const username = process.env.DB_USERNAME || sequelizeConfig[mode].username || 'root';
const password = process.env.DB_PASSWORD || sequelizeConfig[mode].password || 'root';

const connectionObject = {
    host: process.env.DB_HOST || sequelizeConfig[mode].host || 'localhost',
    dialect, // 'mysql'|'sqlite'|'postgres'|'mssql',

};

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('../models/user.model')(sequelize, Sequelize);
// here db associations

module.exports = db;