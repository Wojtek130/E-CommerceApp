'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "token" from table "Users"
 *
 **/

var info = {
    "revision": 4,
    "name": "tokenColumnDeleted",
    "created": "2023-02-05T09:58:48.182Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["Users", "token"]
}];

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
