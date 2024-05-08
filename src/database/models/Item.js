const ItemModel = (sequelize, datatypes) => {
  const Item = sequelize.define(
    "Item",
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
      description: {
        type: datatypes.STRING,
        allowNull: false,
      },
      completed: {
        type: datatypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "items",
      timestamps: false,
      paranoid: true,
    }
  );

  return Item;
};

module.exports = ItemModel;
