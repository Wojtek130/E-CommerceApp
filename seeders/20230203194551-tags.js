"use strict";
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let rawData = fs.readFileSync("config/tags.json");
    let data = await JSON.parse(rawData);
    return await queryInterface.bulkInsert("Tags", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
