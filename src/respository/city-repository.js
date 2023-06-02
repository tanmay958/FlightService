const {City} =  require("../models/index");

class CityRepository{
    async createCity({name})
    {
        try{
            const city =  await City.create({name});
        }
        catch(error)
        {
            throw {error};
        }
    }
    async deleteCity({cityid})
    {
        try{
            await City.destroy(
                {
                    where:{
                        id :cityid
                    }
                });

        }
        catch(err){
            throw {error};
        }
    }
}
module.exports = CityRepository;