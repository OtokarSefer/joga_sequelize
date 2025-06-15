"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    body: DataTypes.TEXT,
    published: DataTypes.DATE,
    author_id: DataTypes.INTEGER,
  });

  Article.associate = models => {
    Article.belongsTo(models.Author, {
      foreignKey: "author_id",
      as: "author"
    });
};
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
          model: "Authors",
          key: "id",
        },},},
        {
    sequelize,
    modelName: "Article",
  });
  return Article;
};