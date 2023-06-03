const express =  require("express");

const CityController =  require("../../controllers/city-controller");

const router = express.Router();

router.post('/city',CityController.create);

router.get('/city/:id',CityController.get);

router.delete('/city/:id',CityController.destroy);

router.patch('/city/:id',CityController.update);
 
router.get('/city',CityController.getAll);

// quert param gets with the get request 

module.exports = router;