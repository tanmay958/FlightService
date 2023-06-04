const express =  require("express");

const CityController =  require("../../controllers/city-controller");
 

const FlightController  =  require("../../controllers/flight-controller");


const AirportController = require("../../controllers/airport-controller");

const {FlightMiddleware} = require("../../middlewares/index");


const router = express.Router();

router.post('/city',CityController.create);

router.get('/city/:id',CityController.get);

router.delete('/city/:id',CityController.destroy);

router.patch('/city/:id',CityController.update);
 
router.get('/city',CityController.getAll);


router.post('/airport',AirportController.create);




router.get('/flights',FlightController.getFlights);
router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.createFlight);

// quert param gets with the get request 

module.exports = router;
