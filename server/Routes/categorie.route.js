const express=require("express")
const   Router = express.Router();
const{getAll, addAll,deletecategorie, updatecategorie,getOnecategorie}=require("../Controllers/categorie.controller")


Router.get("/get",getAll)
Router.get("/:id",getOnecategorie)
Router.post('/add',addAll)
Router.delete('/:id',deletecategorie)
Router.put('/:id',updatecategorie)

module.exports=Router