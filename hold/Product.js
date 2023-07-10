module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define("Pruduct",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discription:{
            type:DataTypes.STRING,
            allowNull:true
        },
        price:{
            type:DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        image_cover:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        size_cover:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        color_cover:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        status:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        // productCategory_id:{},
        // productDetail_id:{},
    })
    return Product;
}