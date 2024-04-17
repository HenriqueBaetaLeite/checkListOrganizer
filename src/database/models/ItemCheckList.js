const ItemCheckListModel = (sequelize, datatypes) => {
  const ItemCheckList = sequelize.define(
    "ItemCheckList",
    {
      itemId: {
        type: datatypes.INTEGER,
        allowNull: false,
      },
      checkListId: {
        type: datatypes.INTEGER,
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
    models.Item.belongsToMany(models.CheckList, {
      through: ItemCheckList,
      foreignKey: "checkListId",
      as: "checkList",
    });

    models.CheckList.belongsToMany(models.Item, {
      through: ItemCheckList,
      foreignKey: "itemId",
      as: "itemsList",
    });
  };

  return ItemCheckList;
};

module.exports = ItemCheckListModel;
