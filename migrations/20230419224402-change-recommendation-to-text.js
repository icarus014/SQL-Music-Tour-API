'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('Bands', 'recommendation',{
    type: DataTypes.TEXT,
    defaulValue: 'very wow, much recommend'
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Bands', 'recommendation',{
      type: DataTypes.TEXT,
      defaulValue: null
     })
  }
};
