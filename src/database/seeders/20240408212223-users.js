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
        {
          id: 2,
          email: "janedoe@gmail.com",
          password:
            "$2a$10$Dl3WzrEecY46b5V./VuIHebQ/o2R30CLTGMdN1Rc3FfUdXGMaZKAe",
          // senha? "123456"
        },
        {
          id: 3,
          email: "johndoe@gmail.com",
          password:
            "$2a$10$32E5op9kuTnCEd.6BipbIuw.P310wX5ro.FrbKmgl57Van2Wxuiny",
          // senha? "123456"
        },
      ],
      {}
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
