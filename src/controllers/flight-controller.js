const {FlightService} = require("../services/index");

const flightService =  new FlightService();
const createFlight =  async (req,res) =>{
    try{
    const flight  = await flightService.createFlight(req.body);
    res.status(201).json({
        data:   flight,
        success :  true,
        message :  "flight created successfully",
        error : {}
    })
}
catch(error)
{
   
       return   res.status(500).json({
            data  : {},
            success  : false,
            message :  "couldnot create flight",
        })

}

}
const getFlights =  async (req,res) =>{
    try{
        const response = await flightService.getFlights(req.query);
        return res.status(201).json({
            data : response,
            success :  true,
            error : {}
        })
    }
    catch(error)
    {
        return   res.status(500).json({
            data  : {},
            success  : false,
            message :  "couldnot create flight",
        })

    }
}

module.exports ={
    createFlight,
    getFlights,
}