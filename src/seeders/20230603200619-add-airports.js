'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [{
         name: 'tirchy international airport',
         cityId : 7,
         createdAt : new Date(),
         updatedAt : new Date(),
        
       },
       {
        name:"indragandhi international airport",
        cityId : 3,
        createdAt : new Date(),
         updatedAt : new Date(),
       },
       {
        name : "kolkata international airport",
        cityId : 4,
        createdAt : new Date(),
         updatedAt : new Date(),
       },{
        name : "kolkata terminal 2 international airport",
        cityId : 4,
        createdAt : new Date(),
         updatedAt : new Date(),
       }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
