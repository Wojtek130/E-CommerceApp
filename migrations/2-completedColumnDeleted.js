'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "completed" from table "FullOrders"
 *
 **/

var info = {
    "revision": 2,
    "name": "completedColumnDeleted",
    "created": "2023-02-04T23:03:17.642Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["FullOrders", "completed"]
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
