const checkListModel = (sequelize, DataTypes) => {
  const CheckList = sequelize.define(
    "CheckList",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "checkLists",
      timestamps: false,
      underscored: true,
      paranoid: true,
    }
  );

  CheckList.associate = (models) => {
    CheckList.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return CheckList;
};

module.exports = checkListModel;
