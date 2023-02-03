'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 * createTable "Products", deps: []
 * createTable "Tags", deps: []
 * createTable "FullOrders", deps: [Users]
 * createTable "SingleOrders", deps: [FullOrders]
 * createTable "ProductTags", deps: [Products, Tags]
 *
 **/

var info = {
    "revision": 1,
    "name": "init",
    "created": "2023-02-03T22:05:51.924Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Users",
            {
                "username": {
                    "type": Sequelize.STRING,
                    "field": "username",
                    "notEmpty": true,
                    "allowNull": false
                },
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "isEmail": true,
                    "allowNull": false,
                    "unique": true
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "min": 4,
                    "allowNull": false
                },
                "role": {
                    "type": Sequelize.BOOLEAN,
                    "field": "role",
                    "allowNull": false,
                    "defaultValue": false
                },
                "token": {
                    "type": Sequelize.STRING,
                    "field": "token"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Products",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name",
                    "notEmpty": true,
                    "allowNull": false
                },
                "price": {
                    "type": Sequelize.INTEGER,
                    "field": "price",
                    "notEmpty": true,
                    "allowNull": false
                },
                "isFruit": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isFruit",
                    "notEmpty": true,
                    "allowNull": false
                },
                "photoPath": {
                    "type": Sequelize.STRING,
                    "field": "photoPath"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Tags",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "FullOrders",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "completed": {
                    "type": Sequelize.BOOLEAN,
                    "field": "completed",
                    "notEmpty": true,
                    "defaultvalue": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "SingleOrders",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "productId": {
                    "type": Sequelize.INTEGER,
                    "field": "productId",
                    "allowNull": false
                },
                "quantity": {
                    "type": Sequelize.INTEGER,
                    "field": "quantity",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "FullOrderId": {
                    "type": Sequelize.INTEGER,
                    "field": "FullOrderId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "FullOrders",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ProductTags",
            {
                "ProductId": {
                    "type": Sequelize.INTEGER,
                    "unique": "ProductTags_TagId_ProductId_unique",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "primaryKey": true,
                    "field": "ProductId",
                    "references": {
                        "model": "Products",
                        "key": "id"
                    }
                },
                "TagId": {
                    "type": Sequelize.INTEGER,
                    "unique": "ProductTags_TagId_ProductId_unique",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "primaryKey": true,
                    "field": "TagId",
                    "references": {
                        "model": "Tags",
                        "key": "id"
                    }
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
