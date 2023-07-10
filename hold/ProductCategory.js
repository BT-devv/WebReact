module.exports = (sequelize,DataTypes) =>{
    const ProductCategory = sequelize.define("productCategory",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return ProductCategory;
}