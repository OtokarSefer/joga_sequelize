'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index.js` file will call this method automatically.
     */
    static associate(models) {
      // One tag belongs to one article through ArticleTags
      this.belongsTo(models.Article, {
        foreignKey: 'articleId',
        onDelete: 'CASCADE',
      });

      this.belongsTo(models.Tag, {
        foreignKey: 'tagId',
        onDelete: 'CASCADE',
      });
    }
  }

  ArticleTags.init(
    {
      articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ArticleTags',
    }
  );

  return ArticleTags;
};
