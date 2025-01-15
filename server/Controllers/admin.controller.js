const {admin}=require("../database/index")
module.exports={
    getAlladmin:async(req,res)=>{
    try{
        const admins = await admin.findAll();
      res.send(admins)
    }catch(error){
        res.status(500).send(error)
       throw error
    }

    },
    addAlladmin:async(req,res)=>{
        const {name}=req.body
        try{
            const newadmin= await admin.create({name})
          res.status(201).send({
            success: "admin is created succefully",
         newadmin,
          });
        }catch(error){
            throw error
        }
    },
    getOneadmin:async (req,res)=>{
        const {id}=req.params
        try{
          const admins=await admin.findOne({
            where:{id}
          })
          res.send(admins)
        }catch(error){
          res.status(500).send(error)
        }
      },
    deleteadmin:async(req,res)=>{
        const {id}=req.params
        try{
            const admins=await admin.destroy({
                where :{id:id}
                
            })
            res.send({
                message: "admin is deleted succefully",
            })
        }catch(error){
            throw error
        }
    },

    updateadmin: async (req,res)=>{
        const {id}=req.params
        const {name}=req.body
        if(!id){
          res.status(404).send({message:"id is not found"})
        }
        const admins =await admin.findOne({id})
        if(!admin){
          res.status(401).send({message:"admin not found"})
        }
        const updateadmin= await admins.update(
          {
            name:name||admin.name,
           
          },{
            where:{
              id
            }
          }
        )
        res.send({message:"admin is updated",updateadmin})
      }

}