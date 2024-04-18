"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          email: "euzinho@gmail.com",
          password:
            "$2a$10$6.RYrF.ncWSdadW84sPGu.1tHFkQDTKRfCAFhj1UWxp08W5df.R.i",
            // senha: "123456"
        },
      ],
      {}
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
