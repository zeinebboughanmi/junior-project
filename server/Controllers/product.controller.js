const {Product}=require("../database/index")
module.exports={
    getAll:async(req,res)=>{
    try{
        const products = await Product.findAll();
      res.send(products)
    }catch(error){
        res.status(500).send(error)
       throw error 
    }

    },
    addAll:async(req,res)=>{
        const {name,imageUrl,price,quantity,promotion,verified,deliveryCost,Available}=req.body
        try{
            const newcproduct= await Product.create({name,imageUrl,price,quantity,promotion,verified,deliveryCost,Available})
          res.status(201).send({
            success: "product is created succefully",
            newcproduct,
          });
        }catch(error){
            throw error
        }
    },
    getOneproduct:async (req,res)=>{
        const {id}=req.params
        try{
          const product=await Product.findOne({
            where:{id}
          })
          res.send(product)
        }catch(error){
          res.status(500).send(error)
        }
      },
    deleteproduct:async(req,res)=>{
        const {id}=req.params
        try{
            const product=await Product.destroy({
                where :{id:id}
                
            })
            res.send({
                message: "product is deleted succefully",
            })
        }catch(error){
            throw error
        }
    },

    updateproduct: async (req,res)=>{
        const {id}=req.params
        const {name,imageUrl,price,quantity,promotion,verified,deliveryCost,Available}=req.body
        if(!id){
          res.status(404).send({message:"id is not found"})
        }
        const products =await Product.findOne({id})
        if(!products){
          res.status(401).send({message:"product not found"})
        }
        const updateproduct= await Product.update(
          {
            name:name||Product.name,
            imageUrl:imageUrl||Product.imageUrl,
            price:price||Product.price,
            quantity:quantity||Product.quantity,
            promotion:promotion||Product.promotion,
            verified:verified||Product.verified,
            deliveryCost:deliveryCost||Product.deliveryCost,
            Available:Available||Product.Available
           
          },{
            where:{
              id
            }
          }
        )
        res.send({message:"product is updated",updateproduct})
      }

}