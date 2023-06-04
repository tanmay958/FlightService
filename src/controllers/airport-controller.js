const {AiportService, AirportService} =  require("../services/index");
const airportService =  new AirportService();
const create =  async (req,res) =>{
    try {
          const response  =  await  airportService.create(req.body);
          return res.status(201).json({
            data:response,
            message :  "created the table",
            success :  true,
            error  : {},
          })
    } catch (error) {
        console.log("somthing went wrong in the controller layer");
        return res.status(501).json({
            data :  {},
            success :  false,
            error : {} 
        })
    }
}

module.exports = {
    create,
}