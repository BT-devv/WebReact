module.exports = (sequelize,DataTypes)=>{
    const Feedback = sequelize.define("Feedback",{
        feedback:{
        type: DataTypes.STRING,
        allowNull: true,
      },
    })
    return Feedback;
  }