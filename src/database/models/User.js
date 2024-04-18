const userModel = (sequelize, datatypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

  User.associate = (models) => {
    User.hasMany(models.CheckList, {
      foreignKey: "userId",
      as: "checkLists",
    });
  };

  return User;
};

module.exports = userModel;
