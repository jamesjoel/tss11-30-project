const express = require("express");
const app = express();
const cors = require("cors");

/* this code for deployment ---- start -----*/
const path = require("path");
const root = path.join(__dirname, "dist");
app.use(express.static(root));

/* this code for deployment ---- end -----*/


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require("./allRouter/AllRoutes"));

/* this code for deployment ---- start -----*/
app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})
/* this code for deployment ---- end -----*/



const port = process.env.PORT || 3000;


let start = async()=>{
    await app.listen(port);
    console.log("server running with port ", port);
}

start();