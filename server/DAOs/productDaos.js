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

exports.getProduct = (productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: productID },
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
            })
            resolve('create new product succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.updateProductData = (productID,data) => {
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
                    id: productID
                    }
            });
            resolve('update product succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteProduct = (productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.destroy({
                    where: {
                    id: productID
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
                productID:data.productID,
            },{
                where:{
                    productID: db.Product.id,
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
                productID:data.productID,
                producDetailID:data.producDetailID
            },{
                where:{
                    productID:db.Product.id,
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
                productID:data.productID,
                producDetailID:data.producDetailID
            },{
                where:{
                    productID:db.Product.id,
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
                productID:data.productID,
                producDetailID:data.producDetailID
            },{
                where:{
                    productID:db.Product.id,
                    producDetailID:db.ProductDetail.id
                }
            })
            resolve('create new  succeed');

        } catch (e) {
            reject(e);
        }
    })
}
