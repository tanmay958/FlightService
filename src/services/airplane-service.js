const {AirplaneRepository} =  require("../respository/index")


const airplaneRepository =  new AirplaneRepository();
class AirplaneService{
    async getAirplane(id)
    {
        try{
            console.log("airplane servix");
           console.log(id); 
        const airplane =  await  airplaneRepository.getAirplane(id);
        return airplane;
    }
        catch(error)
        {
            console.log("something wrong in the service layer");
            throw {error};
        }
    }

}
module.exports =  AirplaneService;