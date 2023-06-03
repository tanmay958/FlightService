const express = require('express')

const bodyParser  =  require("body-parser")

const {PORT} =  require("./config/ServerConfig")
const db  =  require('./models/index');
const sequelize  = require("sequelize");
// const {City,Airport} =  require('./models/index');



const  ApiRoutes  =  require("./routes/index");
const  setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/api',ApiRoutes);


app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  if(process.env.db_sync)
  {
    db.sequelize.sync({alter:true});
  }

})
}
setupAndStartServer();