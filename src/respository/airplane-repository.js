const {Airplane} =  require("../models/index");


class AirplaneRepository{

    async getAirplane(id)
    {
        try {
            console.log("airplane repo --",id);
            const airplane  =  await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("sonething wrong in the repository layer");
            console.log(error);
            throw {error};
        }
    }
}

module.exports =  AirplaneRepository;