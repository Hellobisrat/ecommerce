const {Model,DataTypes} = require('sequelize')

const sequelize = require('../config/connection')

class ProductTag extends Model {}

ProductTag.int (
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    product_id:{
      type:DataTypes.INTEGER,
      references: {
        module:'product',
        key:'id'
      }
    },
    tag_id:{
      type:DataTypes.INTEGER,
      references:{
        module:'Tag',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName:'ProductTag'
  }
);

module.exports = ProductTag;