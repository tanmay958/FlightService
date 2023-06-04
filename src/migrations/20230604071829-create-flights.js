'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        unique : true,
        allowNull:false,

      },
      AirplaneId: {
        type: Sequelize.INTEGER,
        allowNull :false
      },
      DepartureAirportId: {
        type: Sequelize.INTEGER,
        allowNull :false,
      },
      ArrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull :false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull : false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull :false,
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull :false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};