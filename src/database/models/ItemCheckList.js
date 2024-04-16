const ItemCheckListModel = (sequelize, datatypes) => {
  const ItemCheckList = sequelize.define(
    "ItemCheckList",
    {
      itemId: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      checkListId: {
        type: datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: "itemsCheckLists",
      timestamps: false,
      underscored: true,
    }
  );

  ItemCheckList.associate = (models) => {
    models.Item.belongsTo(models.CheckList, {
      foreignKey: "checkListId",
      as: "checkList",
    });

    models.CheckList.hasMany(models.Item, {
      foreignKey: "itemId",
      as: "items",
    });
  };

  return ItemCheckList;
};

module.exports = ItemCheckListModel;
