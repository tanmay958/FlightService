const {CityRepository} =  require("../respository/index");


//here all the bussiness logic being written so keep it simple\
//a way or creating the constructor based

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city  = this.cityRepository.createCity(data);
            return city ;
        } catch (error) {
            console.log("somethig went wrong at the service layer");
            throw {error};
        }
        
    }
    async deleteCity(id){
        try {
           const response  =  await  this.cityRepository.deleteCity(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the servie layer");
            throw {error};
        }

    }
    async updateCity(cityId,name){
        try{
            const city =  await this.cityRepository.updateCity(cityId,name);
            return city;
        }
        catch (error) {
            console.log("something went wrong in the servie layer");
            throw {error};
        }

    }
    async getCity(){
        
    }
}