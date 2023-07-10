module.exports = (sequelize,DataTypes) =>{
    const ProductDetail = sequelize.define("productDetail",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discription:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })
    return ProductDetail;
}