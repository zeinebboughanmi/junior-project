module.exports=(Connection,DataTypes)=>{
    const admin=Connection.define(
        "Admin",
        {
       name:{
        type:DataTypes.STRING,
        allowNull:false
       }
        }
    )
    return admin
}