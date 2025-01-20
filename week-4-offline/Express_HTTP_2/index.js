const express = require("express")

const app = express();

app.use(express.json())

const user = [{
    name:"Jhone",
    kidney:[{
        healthy:false,
    }]
}]

//Get
app.get("/", function(req, res){
    const JhoneKidney = user[0].kidney;
    let HealthyKidney = 0;
    const NoOfKideny = JhoneKidney.length;
    
    for(let i = 0; i < JhoneKidney.length; i++){
        if(JhoneKidney[i].healthy){
            HealthyKidney++;
        }
    }
    const unHealthyKidney = NoOfKideny-HealthyKidney;
    res.json({HealthyKidney, unHealthyKidney , NoOfKideny})
})

//Create
app.post("/", function(req,res){
    console.log(req.body)
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy:isHealthy
   })

   return res.json({message:"done!"})
})

//Update
app.put("/", function(req,res){
    const JhoneKidney = user[0].kidney;
    for(let i= 0 ; i< JhoneKidney.length; i++){
        user[0].kidney[i].healthy = true;
    }
    res.json({msg:"updated successfully"})
})

//DELETE
app.delete("/", function(req,res){
    const newKedny = [];

    for(let i = 0 ; i < user[0].kidney.length; i++){
        if(user[0].kidney[i].healthy){
            newKedny.push({
                isHealthy:true,
            })
        }
    }
    user[0].kidney = newKedny;
    res.json({msg:"deleted kideny successfully"})
})

app.listen(3000, ()=>{
    console.log("the server is listinig to port 3000")
});