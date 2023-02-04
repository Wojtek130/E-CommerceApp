'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "role" from table "Users"
 * addColumn "isAdmin" to table "Users"
 *
 **/

var info = {
    "revision": 3,
    "name": "renameColumnAdmin",
    "created": "2023-02-04T23:06:01.414Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Users", "role"]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "isAdmin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "isAdmin",
                "allowNull": false,
                "defaultValue": false
            }
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
