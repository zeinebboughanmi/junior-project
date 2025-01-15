const express=require("express")
const   Router = express.Router();
const{getAlladmin, addAlladmin, deleteadmin, updateadmin, getOneadmin}=require("../Controllers/admin.controller")


Router.get("/get",getAlladmin)
Router.post('/add',addAlladmin)
Router.get('/:id',getOneadmin)
Router.delete('/:id',deleteadmin)
Router.put('/:id',updateadmin)

module.exports=Router