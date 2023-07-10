module.exports = (sequelize,DataTypes) =>{
    const Img = sequelize.define("Img",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })
    return Img;
}