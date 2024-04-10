const userModel = (sequelize, datatypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: datatypes.STRING,
        allowNull: false,
      },
      email: {
        type: datatypes.STRING,
        allowNull: false,
      },
      password: {
        type: datatypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};

module.exports = userModel;
