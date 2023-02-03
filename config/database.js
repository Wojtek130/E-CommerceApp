const Sequelize = require('sequelize');

const mode = process.env.MODE || 'development';
const dialect = process.env.DB_DIALECT || 'postgres';
const database = process.env.DB_DATABASE || 'shopdb';
const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || 'root';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '5432';

const connectionObject = {
    host: host,
    port: port,
    dialect: dialect
};

const sequelize = new Sequelize(database, username, password, connectionObject);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../models/user.model')(sequelize, Sequelize);
db.Product = require('../models/product.model')(sequelize, Sequelize);
db.FullOrder = require('../models/fullOrder.model')(sequelize, Sequelize);
db.SingleOrder = require('../models/singleOrder.model')(sequelize, Sequelize);
db.Tag = require('../models/tag.model')(sequelize, Sequelize);

db.FullOrder.hasMany(db.SingleOrder);
db.SingleOrder.belongsTo(db.FullOrder);

db.User.hasMany(db.FullOrder);
db.FullOrder.belongsTo(db.User);

db.Product.belongsToMany(db.Tag, { through: "ProductTag" });
db.Tag.belongsToMany(db.Product, { through: "ProductTag" });


//module.exports = db;
module.exports = sequelize;




