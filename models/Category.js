const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js')

class Category extends Mode{}

Category.int (
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      PrimaryKey:true,
      autoIncrement:true
    },
    category_name:{
      type:DataType.STRING,
      allowNull:false
    }

  },
  {
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:'category'
  }
);
module.exports = Category;