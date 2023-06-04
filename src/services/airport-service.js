const CrudService =  require("./crud-service");
const {AirPortRepository} =  require("../respository/index");


class AirportService extends CrudService{
    constructor(){
        const airportRepository =  new AirPortRepository();
        super(airportRepository);
    }
}
module.exports =  AirportService;