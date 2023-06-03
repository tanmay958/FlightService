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
    async deleteCity({cityId}){
        try{
            await City.destror({
                where  :{
                    id :  cityId,
                }
            });
        }
        catch(error)
        {
            console.log("something happenend in the repo layer");
            throw{ error};
        }
    }

    async updateCity({id,name}){
        await City.update({name:name},{
            where : {
                id : id,
            }
        })

    }
    async getCity({cityId}){
        try{
            const city = await City.findByPk(cityId);
        }
        catch(error)
        {
             console.log("something happenend in the repo layer");
            throw{ error};
        }
    }
}
module.exports = CityRepository;