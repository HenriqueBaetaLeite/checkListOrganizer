"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("itemsCheckLists", {
      itemId: {
        field: "item_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "items",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      checkListId: {
        field: "check_list_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "checkLists",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("itemsCheckLists");
  },
};
