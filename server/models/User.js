module.exports = (sequelize,DataTypes)=>{
  const User = sequelize.define("user",{
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    address :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    birth:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    createAt:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    updateAt:{
      type: DataTypes.DATE,
      allowNull: false,
    },
  })
  return User;
}