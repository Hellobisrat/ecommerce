const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js')

class Product extends Model {}

Product.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    product_name:{
      Type:DataTypes.STRING,
      allowNull:false
    },
    price:{
      type:DataTypes.Decimal,
      allowNull:false,
      validate:{
        isDecimal:true
      }  
    },
    stock:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10,
      validate:{
        isNumber:true
      }
    },
    category_id:{
      type:DataTypes.INTEGER,
      references: {
        model:'Category',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:'product'
  }
);

module.exports = Product