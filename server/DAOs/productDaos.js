const db = require('../models/index');

exports.getAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findAll({

                raw:true,    
            });
            resolve(product)
        } catch (e) {
            reject(e);
        }
    })
}

exports.getProduct = (ProductID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: ProductID },
                raw: true,

            });

            if (product) {
                resolve(product)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}


exports.createProduct = async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                name:data.name,
                description:data.description,
                price:data.price,
                imageCover:data.imageCover,
                sizeCover:data.sizeCover,
                colorCover:data.colorCover,
                quantity:data.quantity,
                status:data.status,
                CategoryId:data.CategoryId,
            },{
                where:{
                    CategoryId:{
                        equals: 20,
                    },
                }
            })
            resolve('create new product succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.updateProductData = (ProductID,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.update({ 
                name: data.name, 
                description:data.description,
                price:data.price,
                imageCover:data.imageCover,
                sizeCover:data.sizeCover,
                colorCover:data.colorCover,
                quantity:data.quantity,
                status:data.status,
                CategoryId:data.CategoryId,
                }, {
                    where: {
                    id: ProductID
                    }
            });
            resolve('update product succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteProduct = (ProductID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.destroy({
                    where: {
                    id: ProductID
                    }
            });
            resolve('delete product succeed')

        } catch (e) {
            reject(e);
        }
    })
}
exports.createProductDetail = async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            await db.ProductDetail.create({
                name:data.name,
                description:data.description,
                ProductID:data.ProductID,
            },{
                where:{
                    ProductID: db.Product.id,
                }
            })
            resolve('create new product detail succeed');

        } catch (e) {
            reject(e);
        }
    })
}

exports.createSize = async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            await db.Size.create({
                size:data.size,
                ProductID:data.productID,
                producDetailID:data.producDetailID
            },{
                where:{
                    ProductID:db.Product.id,
                    producDetailID:db.ProductDetail.id
                }
            })
            resolve('create new  succeed');

        } catch (e) {
            reject(e);
        }
    })
}


exports.createSize = async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            await db.Image.create({
                img:data.img,
                ProductID:data.ProductID,
                producDetailID:data.producDetailID
            },{
                where:{
                    ProductID:db.Product.id,
                    producDetailID:db.ProductDetail.id
                }
            })
            resolve('create new  succeed');

        } catch (e) {
            reject(e);
        }
    })
}

exports.createSize = async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            await db.Color.create({
                color:data.color,
                ProductID:data.ProductID,
                producDetailID:data.producDetailID
            },{
                where:{
                    ProductID:db.Product.id,
                    producDetailID:db.ProductDetail.id
                }
            })
            resolve('create new  succeed');

        } catch (e) {
            reject(e);
        }
    })
}
