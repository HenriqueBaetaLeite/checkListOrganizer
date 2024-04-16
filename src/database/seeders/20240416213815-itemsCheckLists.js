"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ItemsCheckLists",
      [
        {
          itemId: 1,
          checkListId: 1,
        },
        {
          itemId: 2,
          checkListId: 1,
        },
        {
          itemId: 1,
          checkListId: 2,
        },
        {
          itemId: 4,
          checkListId: 2,
        },
        {
          itemId: 5,
          checkListId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ItemsCheckLists", null, {});
  },
};
