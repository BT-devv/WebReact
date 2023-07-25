const db = require('../models/index');



exports.createCategory = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.create({
                name:data.name,
            },{
                where:{
                    name:null
                }
            })
            resolve('create new category succeed');

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
                productCategoryID:data.productCategoryID,
            },{
                where:{
                    productCategoryID: db.Category.id,
                }
            })
            resolve('create new product succeed');

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
