const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const HotelBooking = require("../models/HotelBooking")
routes.post("/", async(req, res)=>{
    // console.log(req.body);return;

    if(req.headers.authorization)
    {
        let token = req.headers.authorization;
        let userinfo = jwt.decode(token, "hello");
        if(userinfo){
            req.body.userId = userinfo.id;
            await HotelBooking.create(req.body);
            res.send({success:true})
        }else{
            res.send({success:false})
        }
    }
    else{
        res.send({success:false})
    }
})



routes.get("/list/owner", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let owerinfo = jwt.decode(token, "hello");
        if(owerinfo){
            console.log(owerinfo);
        }else{
            res.send({false:false})
        }
    }else{
        res.send({false:false})
    }
})


// routes.get("/deleteall", async(req, res)=>{
//     await HotelBooking.collection.drop();
//     res.send({success:true});
// })

module.exports = routes;