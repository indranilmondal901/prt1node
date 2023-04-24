const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = 8080; 

const app = express();
//connection
require("./db/connection");
//router
const router = require("./routes/route");

//middlewire
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use("/v1",router)


//listem
app.listen(PORT,()=>{
    console.log("your app is running on==> "+ PORT);
})