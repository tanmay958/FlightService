const {flights} =  require('../models/index');
const { Op } = require("sequelize");
class FlightRepository{


    #createfilter(data){
        let temp = [];
        let filter = {};
        console.log(data.minValue);
        if(data.ArrivalAirportId){
            filter.ArrivalAirportId =  data.ArrivalAirportId;
        }
        if(data.minValue)
        {
            filter.price = {[Op.gte]:data.minValue};
            

        }
        if(data.maxValue)
        {

            filter.price =  {[Op.gte]:data.maxValue};
        }
        if(data.minValue &&  data.maxValue)
        {  
            filter.price = {[Op.between]: [data.minValue, data.maxValue]};
        }

        
        return filter;
    }

    async createFlight(data)
    {
        try {
            const flight =  await flights.create(data);
          
            return flight;
        } catch (error) {
            console.log("sonething went wrong in the repository layer");
            console.log(error);
            throw {error};

            
        }
    }
    async getFlights(filter)
    {
        try{

            const filterObject =  this.#createfilter(filter);
            console.log(filterObject.price);

            const response =  await flights.findAll({
                where : filterObject
            });
            return response;
            
        }
        catch(error)
        {   console.log(error);
            console.log("something wrong in the repo layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;