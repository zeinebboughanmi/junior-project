const express=require("express")
const   Router = express.Router();
const{getAll, addAll,deleteproduct, updateproduct,getOneproduct}=require("../Controllers/product.controller")


Router.get("/get",getAll)
Router.get("/:id",getOneproduct)
Router.post('/add',addAll)
Router.delete('/:id',deleteproduct)
Router.put('/:id',updateproduct)

module.exports=Router