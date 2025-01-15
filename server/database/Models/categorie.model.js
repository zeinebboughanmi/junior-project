
module.exports=(connection,DataTypes)=>{
    const caterogie=connection.define(
'categorie',
{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }

}
    
    )
    return caterogie
}

