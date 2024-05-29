'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      editing: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};
