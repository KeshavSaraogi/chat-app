'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {through: 'ChatUser', foreignKey: 'chatId'})
      this.hasMany(models.ChatUser, {foreignKey: 'chatId'})
      this.hasMany(models.Message, {foreignKey: 'chatId'})
    }
  }
  Chats.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chats;
};