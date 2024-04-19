"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "itemsCheckLists",
      [
        {
          check_list_id: 1,
          item_id: 1,
        },
        {
          check_list_id: 1,
          item_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("itemsCheckLists", null, {});
  },
};
