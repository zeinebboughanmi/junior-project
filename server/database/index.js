const {Sequelize,DataTypes}=require("sequelize")
const Connection = new Sequelize('ZARA', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql"
  })


db={}


  const testconnection=async ()=>{
    try {
        await Connection.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
     console.error('Unable to connect to the database:', error);

}
}
testconnection()


db.admin=require('../database/Models/admin.model.js')(Connection,DataTypes)
db.categorie=require('../database/Models/categorie.model.js')(Connection,DataTypes)
db.Product=require('../database/Models/product.model.js')(Connection,DataTypes)
db.user=require('../database/Models/users.model.js')(Connection,DataTypes)
db.admin.hasMany(db.Product)
db.Product.belongsTo(db.admin)
db.categorie.hasMany(db.Product)
db.Product.belongsTo(db.categorie)
db.user.hasMany(db.categorie)
db.user.belongsTo(db.user)




Connection
  .sync({ force: false })
  .then(() => {
    console.log("tables are created inside datbase");
  })
  .catch((err) => {
    throw err;
  });




module.exports=db



 