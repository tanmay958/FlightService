const express = require('express')

const bodyParser  =  require("body-parser")

const {PORT} =  require("./config/ServerConfig")
const db  =  require('./models/index');
const sequelize  = require("sequelize");
const {City,Airport} =  require('./models/index');



const  ApiRoutes  =  require("./routes/index");
const  setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/api',ApiRoutes);


app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  //  db.sequelize.sync({ force: true });
  const city = await City.findOne({
    where : {
      id  : 3
    }
  })
  // const airports =  city.getAirports();
  console.log(city);
  const airports =  await city.getAirports();
  city.addAirport({
    name : "jindal vijay nagar airport",
    id  :  city.dataValues.id,
    

  })
  console.log(airports);


  
})
}
setupAndStartServer();