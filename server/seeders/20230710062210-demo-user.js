'use strict';
const StaticData = require('../utils/StaticData')
const bcrypt =require ('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username:'JonhDoe',
      password: await bcrypt.hash('123456', 10),
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      role: StaticData.AUTH.Role.admin,
      birth: '2003-12-08',
      phone:'0123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
