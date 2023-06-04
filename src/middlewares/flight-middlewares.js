// middleware are the function have the access to request bject,response object , next
const {ClientErrorCodes} =  require("../utils/error-codes");
const validateCreateFlight =  (req,res,next)=>{
    if(!req.body.flightNumber ||
        !req.body.AirplaneId ||
        !req.body.DepartureAirportId ||
        !req.body.ArrivalAirportId || 
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
        )
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data :{},
            success :  false,
            message :  "invalid request body for create a flight",
            err :  "missing mandatory properties to create flight"
        })
        else{
            next();
        }
}
module.exports = {
    validateCreateFlight,
}