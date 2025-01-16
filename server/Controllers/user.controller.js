const {user}=require("../database/index")
module.exports={
    getAllusers:async(req,res)=>{
    try{
        const users = await user.findAll();
      res.send(users)
    }catch(error){
        res.status(500).send(error)
       throw error
    }

    },

     login : async (req, res) => {
        const { Email, password } = req.body;
        try {
            const userData = await user.findOne({ where: { Email } });
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            if (userData.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.status(200).json({ message: 'Login successful', user: userData });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred', error });
        }
    },
    addAllusers:async(req,res)=>{
        const {Email,Password}=req.body
        try{
            const newuser= await user.create({Email,Password})
          res.status(201).send({
            success: "user is created succefully",
         newuser,
          });
        }catch(error){
            throw error
        }
    },
    getOneusers:async (req,res)=>{
        const {id}=req.params
        try{
          const users=await user.findOne({
            where:{id}
          })
          res.send(users)
        }catch(error){
          res.status(500).send(error)
        }
      },
    deleteusers:async(req,res)=>{
        const {id}=req.params
        try{
            const users=await user.destroy({
                where :{id:id}
                
            })
            res.send({
                message: "user is deleted succefully",
            })
        }catch(error){
            throw error
        }
    },

    updateusers: async (req,res)=>{
        const {id}=req.params
        const {Email,Password}=req.body
        if(!id){
          res.status(404).send({message:"id is not found"})
        }
        const users =await user.findOne({id})
        if(!user){
          res.status(401).send({message:"user not found"})
        }
        const updateuser= await users.update(
          {
            Email:Email||user.Email,
            Password:Password||user.Password
           
          },{
            where:{
              id
            }
          }
        )
        res.send({message:" user is updated",updateuser})
      }

}