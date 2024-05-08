const ItemCheckListModel = (sequelize, datatypes) => {
  const ItemCheckList = sequelize.define(
    "ItemCheckList",
    {
      checkListId: {
        type: datatypes.INTEGER,
        allowNull: false,
      },
      itemId: {
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
      foreignKey: "itemId",
      as: "checkList",
    });
    
    models.CheckList.belongsToMany(models.Item, {
      through: ItemCheckList,
      foreignKey: "checkListId",
      as: "itemsList",
    });
  };

  return ItemCheckList;
};

module.exports = ItemCheckListModel;
