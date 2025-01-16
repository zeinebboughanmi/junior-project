const express=require("express")
const   Router = express.Router();
const{getAllusers, addAllusers,deleteusers, updateusers, getOneusers,login}=require("../Controllers/user.controller")


Router.get("/get",getAllusers)
Router.post('/add',addAllusers)
Router.get('/:id',getOneusers)
Router.delete('/:id',deleteusers)
Router.put('/:id',updateusers)
Router.post('/login',login)


module.exports=Router