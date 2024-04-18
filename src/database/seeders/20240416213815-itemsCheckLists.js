"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "itemsCheckLists",
      [
        {
          item_id: 1,
          check_list_id: 1,
        },
        {
          item_id: 2,
          check_list_id: 1,
        },
        {
          item_id: 3,
          check_list_id: 2,
        },
        {
          item_id: 1,
          check_list_id: 3,
        },
        {
          item_id: 4,
          check_list_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("itemsCheckLists", null, {});
  },
};
