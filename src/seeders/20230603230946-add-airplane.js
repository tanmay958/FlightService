'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [
     *    {
        name: 'xyz international airport',
        CityId : 3,
        createdAt : new Date(),
        updatedAt : new Date(),
       
      }
     * ], {});
    */
      await queryInterface.bulkInsert('Airplanes', [
           {
            modelNumber : "Airbus A330",
            createdAt :  new Date(),
            capacity : 300,
            updatedAt : new Date(),
          
         },
         {
          modelNumber : "Boeing 747",
          capacity : 300,
          createdAt :  new Date(),
          updatedAt : new Date(),
        
       },
       {
        modelNumber : "Boeing 777",
        createdAt :  new Date(),
        capacity : 400,
        updatedAt : new Date(),
      
     },
     {
      modelNumber : "Douglas DC-3",
      createdAt :  new Date(),
      capacity : 200,
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
