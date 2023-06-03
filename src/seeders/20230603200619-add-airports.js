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
  //  await queryInterface.bulkInsert('Cities',[{
  //   id :  2 ,
  //   name :  "trichy",
  //   createdAt : new Date(),
  //   updatedAt : new Date(),
  //  },
  //  {
  //   id :  3,
  //   name :  "banglore",
  //   createdAt : new Date(),
  //   updatedAt : new Date(),
  //  }
  // ])
  //   await queryInterface.bulkInsert('Airports', [{
  //        name: 'tirchy international airport',
  //        CityId : 2,
  //        createdAt : new Date(),
  //        updatedAt : new Date(),
        
  //      },
  //      {
  //       name: 'banglore international airport',
  //       CityId : 3,
  //       createdAt : new Date(),
  //       updatedAt : new Date(),
       
  //     },
  //     {
  //       name: 'manglore international airport',
  //       CityId : 3,
  //       createdAt : new Date(),
  //       updatedAt : new Date(),
       
  //     },
  //     {
  //       name: 'xyz international airport',
  //       CityId : 3,
  //       createdAt : new Date(),
  //       updatedAt : new Date(),
       
  //     },
  //     //  {
  //     //   name:"indragandhi international airport",
  //     //   CityId : 3,
  //     //   createdAt : new Date(),
  //     //    updatedAt : new Date(),
  //     //  },
  //     //  {
  //     //   name : "kolkata international airport",
  //     //   CityId : 4,
  //     //   createdAt : new Date(),
  //     //    updatedAt : new Date(),
  //     //  },{
  //     //   name : "kolkata terminal 2 international airport",
  //     //   CityId : 4,
  //     //   createdAt : new Date(),
  //     //    updatedAt : new Date(),
  //     //  }
      
  //     ], {});
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

//creation of seed file npx sequelize seed:generate --name add-airplane
// executing a seed file