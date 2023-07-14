module.exports = (sequelize,DataTypes) =>{
    const Color = sequelize.define("Color",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })
    return Color;
}