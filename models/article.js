'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: DataTypes.STRING,
      body: DataTypes.TEXT,
      published: DataTypes.DATE,
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Authors',
          key: 'id',
        },},},
        {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};