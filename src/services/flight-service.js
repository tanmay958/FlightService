const {FlightRepository,AirplaneRepository} =  require("../respository/index");
const flightRepository =  new FlightRepository();
const airplaneRepository = new AirplaneRepository();
class FlightService{
   
    async createFlight(data){
        try{
            console.log(data.AirplaneId);
        const airplane = await airplaneRepository.getAirplane(data.AirplaneId);
        const flight =  await flightRepository.createFlight({...data,totalSeats : airplane.capacity});
        return flight;

        
        }
        catch(error){
            console.log("something wrong in the service layer");
            throw {error};
        }
        
    }
    async getFlights(filter){
        try {
            const response  =  await flightRepository.getFlights(filter);
            return response;
            
        } catch (error) {
            console.log("something wrong in the service layer");
            throw {error};
            
        }
    }

    async getFlight(id){
        try {
            const response =  await flightRepository.getFlight(id);
            return response;
        } catch (error) {
            
            console.log("somthing happen  in the service layer");
            throw {error};
        }
    }

        async updateAfterBooking(id,seat)
        {
            try {
                const response = await flightRepository.updateAfterBooking(id,seat);
                return response ;

            }
            catch(error)
            {
                console.log("something went wrong inthe service layer");
                throw {error};
            }
        }

   
}
module.exports =  FlightService;