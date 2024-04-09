"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          password: "123456",
        },
        {
          name: "Jane Doe",
          email: "janedoe@gmail.com",
          password: "123456",
        },
      ],
      {}
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
