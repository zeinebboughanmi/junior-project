module.exports = (connection, DataTypes) => {
    const User = connection.define(
      "User",
      {
        Email:{
        type:DataTypes.STRING,
          allowNull:false
        }
      },
      {
        Password:{
            type:DataTypes.STRING,
            allowNull:false
        }
      }

    );
    return User;
  };