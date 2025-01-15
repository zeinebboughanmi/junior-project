const {categorie}=require("../database/index")
module.exports={
    getAll:async(req,res)=>{
    try{
        const categories = await categorie.findAll();
      res.send(categories)
    }catch(error){
        res.status(500).send(error)
       throw error 
    }

    },
    addAll:async(req,res)=>{
        const {name}=req.body
        try{
            const newcategorie= await categorie.create({name})
          res.status(201).send({
            success: "categorie is created succefully",
         newcategorie,
          });
        }catch(error){
            throw error
        }
    },
    getOnecategorie:async (req,res)=>{
        const {id}=req.params
        try{
          const categories=await categorie.findOne({
            where:{id}
          })
          res.send(categories)
        }catch(error){
          res.status(500).send(error)
        }
      },
    deletecategorie:async(req,res)=>{
        const {id}=req.params
        try{
            const categories=await categorie.destroy({
                where :{id:id}
                
            })
            res.send({
                message: "categorie is deleted succefully",
            })
        }catch(error){
            throw error
        }
    },

    updatecategorie: async (req,res)=>{
        const {id}=req.params
        const {name}=req.body
        if(!id){
          res.status(404).send({message:"id is not found"})
        }
        const categories =await categorie.findOne({id})
        if(!categorie){
          res.status(401).send({message:"categorie not found"})
        }
        const updatecategorie= await categories.update(
          {
            name:name||admin.name,
           
          },{
            where:{
              id
            }
          }
        )
        res.send({message:"categorie is updated",updatecategorie})
      }

}