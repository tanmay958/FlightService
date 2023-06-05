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
const getFlight = async(req,res)=>{
    try{
        const response = await  flightService.getFlight(req.params.id);
        console.log(response);
        return res.status(201).json({
            data : response,
            success : true,
            message:  "successfully fetched the data",
        })

    }
    catch(error)
    {
        console.log("something went wrong in the controller layer");
        console.log(error);
    }
}

const updateAfterBooking =  async(req,res) =>{
    try {
        const response =  await flightService.updateAfterBooking(req.body.id,req.body.totalSeats);

        return res.status(201).json({
            data :  response,
            success : true,
            message :  "successfullt update",
            err :  {}
        });
    } catch (error) {
        console.log(error);

    }
}
module.exports ={
    createFlight,
    getFlights,
    getFlight,
    updateAfterBooking,
}