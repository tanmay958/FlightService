const {CityService} =  require('../services/index');
//controllers are like function so  dont create it as a class
const cityService =  new CityService();
const create =async (req,res)=>{
    try {
        const city =  await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "created city successfully",
            err :  {}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data : {},
            success : false,
            message : "city not created",
            err :  error,
        })
        
    }
}
//delete  -> /city/:id
const destroy = async (req,res)=>{
    try {
        const response =  await cityService.deleteCity(req.params.id);
        return res.status(501).json({
            data : {},
            success : response,
            message : "city deleted",
            err :  error,
        })
    } catch (error) {
        return res.status(501).json({
            data : {},
            success : false,
            message : "not able to delete the city",
            err :  error,
        })
    }
    
}
//patch /city/:id ->req.body
const update = async (req,res)=>{
    try {
        const city = await cityService.updateCity(req.params.id);
        res.status(201).json({
            data :  city,
            status :  true,
            err : error,

        }); 
        
    } catch (error) {
        
    }
    
}
//get -/city/id
const get = async (req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id,req.body);
        res.status(201).json({
            data :  city,
            status :  true,
            err : error,

        });
    } catch (error) {
        return res.status(501).json({
            data : {},
            success : false,
            message : "city not there",
            err :  error,
        })
    }
}

module.export = {
    create,
    destroy,
    get,
    update
}