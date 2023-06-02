const express =  require("express");
const {PORT} =  require('./config/ServerConfig');

const bodyParser  =  require("body-parser");

const CityRepository =  require('./respository/city-repository');
const {City} =  require("./models/index");
const  setupAndStartServer =  async()=>{
    const app = express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended:true}));
    
      
    app.listen(PORT, ()=>{
        console.log("server started");
        const repo =  new CityRepository();
        repo.createCity({name:"DELHI"});
    })
   
}

setupAndStartServer();
