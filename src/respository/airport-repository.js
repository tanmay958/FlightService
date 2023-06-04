const CrudReposirtory =  require('./crud-repository');

const {Airport} = require("../models/index");
class AirportRepository extends CrudReposirtory{
    constructor()
    {
        super(Airport);
    }
}


module.exports =  AirportRepository ;
 