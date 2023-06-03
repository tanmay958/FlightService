const express = require('express')

const bodyParser  =  require("body-parser")

const {PORT} =  require("./config/ServerConfig")

const  ApiRoutes  =  require("./routes/index");
const  setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/api',ApiRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
}
setupAndStartServer();