const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Language extends Model {}

Language.init(
  {
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    language_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "course",
  }
);

module.exports = Language;