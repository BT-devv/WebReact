module.exports = (sequelize,DataTypes) =>{
    const ProductCategory = sequelize.define("product_category",{
        productCategory_id:{
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.String,
            allowNull: false,
        }
    })
    return ProductCategory;
}