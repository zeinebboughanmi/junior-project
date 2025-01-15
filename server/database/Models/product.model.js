module.exports=(Connection,DataTypes)=>{
    const Product=Connection.define(
        "Product",
        {
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            imageUrl:{
                type:DataTypes.STRING,
                allowNull:false
            },
            price:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            quantity:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
    
            },
            
            {
                promotion:{
                    type:DataTypes.INTEGER,
                    allowNull:false 
                },
                verified:{
                    type:DataTypes.BOOLEAN,
                    allowNull:false
                },
                deliveryCost:{
                    type:DataTypes.INTEGER,
                    allowNull:false 
                },
                Available:{
                    type:DataTypes.BOOLEAN,
                    allowNull:false
                },
    
        }
    )
    return Product
    }