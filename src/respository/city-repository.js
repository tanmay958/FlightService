const {City} =  require("../models/index");

class CityRepository{
    async createCity({name}){
        try
      {  const city = await City.create({
            name:name,// can also be written as name only
        })
        return city;}
        catch(error)
        {
            console.log("something happenend in the repo layer");
            throw{ error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where  :{
                    id :  cityId,
                }
            });
            return true;
        }
        catch(error)
        {
            console.log("something happenend in the repo layer");
            throw{ error};
        }
    }

    async updateCity(id,data){
        try{
        const  city  = await City.update(data,{
            where : {
                id : id,
            }
           })
        return city;
    }
    catch(error)
    {
        console.log("something went wronng in the service layer");
        return {error};
    }

    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;

        }
        catch(error)
        {
             console.log("something happenend in the repo layer");
            throw{ error};
        }
    }
}
module.exports = CityRepository;