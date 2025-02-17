const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const Hotel = require("../models/Hotels");

// localhost:3000/api/v1/businessmanage/hotels

routes.post("/hotels", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "hello");
        if(obj){
            
            req.body.businessId = obj.id;
            await Hotel.create(req.body);
            res.send({success:true});

        }else{
            res.send({success:false});
        }
    }else{
        res.send({success:false});
    }
})

routes.get("/hotels", async(req, res)=>{
    if(req.headers.authorization)
        {
            let token = req.headers.authorization;
            let obj = jwt.decode(token, "hello");
            if(obj)
            {
                let result = await Hotel.find({ businessId : obj.id });
                res.send(result);
            }
            else
            {
                res.send({success:false});
            }
        }
    else
    {
        res.send({success:false});
    }

    
})


routes.get("/hotels/:id", async(req, res)=>{
    let id = req.params.id;
    if(req.headers.authorization)
        {
            let token = req.headers.authorization;
            let obj = jwt.decode(token, "hello");
            if(obj)
            {
                let result = await Hotel.find({ _id :  id});
                res.send(result);
            }
            else
            {
                res.send({success:false});
            }
        }
    else
    {
        res.send({success:false});
    }

    
})


routes.put("/hotels/:id", async(req, res)=>{
    let id = req.params.id;
    if(req.headers.authorization)
        {
            let token = req.headers.authorization;
            let obj = jwt.decode(token, "hello");
            if(obj)
            {
                let result = await Hotel.updateMany({ _id : id }, req.body);
                res.send(result);
            }
            else
            {
                res.send({success:false});
            }
        }
    else
    {
        res.send({success:false});
    }

    
})


routes.delete("/hotels/:id", async(req, res)=>{
    let id = req.params.id;
    if(req.headers.authorization)
        {
            let token = req.headers.authorization;
            let obj = jwt.decode(token, "hello");
            if(obj)
            {
                let result = await Hotel.deleteMany({ _id : id });
                res.send(result);
            }
            else
            {
                res.send({success:false});
            }
        }
    else
    {
        res.send({success:false});
    }

    
})




/*
REST --- .get, .post, .put, .delete
*/
module.exports = routes;

/*
localhost:3000/api/v1/student

routes.get("/", (req, res)=>{
    let result = Stu.find();
})

routes.get("/:id", (req, res)=>{
    let id = req.paras.id;
    let result = Stu.find({_id : id});
})

routes.post("/", (req, res)=>{
    let result = Stu.create(req.body);
})

routes.put("/:id", (req, res)=>{
    let id = req.params.id;
    let result = Stu.updateMany({_id : id}, req.body);
})

routes.delete("/:id", (req, res)=>{
    let id = req.params.id;
    let result = Stu.deleteMany({_id : id});
})






*/