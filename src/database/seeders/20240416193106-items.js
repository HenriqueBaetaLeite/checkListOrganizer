"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          name: "Fazer desafio de lógica",
          description: "Fazer o desafio de lógica proposto no repositório",
          completed: false,
        },
        {
          name: "Estudar Sequelize",
          description: "Estudar o conteúdo sobre Sequelize no repositório",
          completed: false,
        },
        {
          name: "Estudar Express",
          description: "Estudar o conteúdo sobre Express no repositório",
          completed: false,
        },
        {
          name: "Estudar MySQL",
          description: "Estudar o conteúdo sobre MySQL no repositório",
          completed: false,
        },
        {
          name: "Comprar pão",
          description: "padaria italia",
          completed: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("items", null, {});
  },
};
