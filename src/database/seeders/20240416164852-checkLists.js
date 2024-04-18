"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "checkLists",
      [
        {
          id: 1,
          title: "Lista de Compras",
          public: true,
          user_id: 1,
        },
        {
          id: 2,
          title: "Lista de Tarefas",
          public: false,
          user_id: 1,
        },
        // {
        //   id: 3,
        //   title: "Lista de Convidados",
        //   public: true,
        //   user_id: 3,
        // },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("checkLists", null, {});
  },
};
