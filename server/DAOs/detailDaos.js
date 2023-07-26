const db = require('../models/index');

exports.getAllDetail = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.ProductDetail.findAll({
                raw: true,
            });
            resolve(detail)
        } catch (e) {
            reject(e);
        }
    })
}

exports.getDetail = (producDetailID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.ProductDetail.findOne({
                where: { id: producDetailID },
                raw: true,

            });

            if (detail) {
                resolve(detail)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}


exports.createDetail = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.ProductDetail.create({
                name:data.name,
                description: data.description,
                productId: data.productId
            },{
                where:{
                    productId: db.Product.id
                }
            })
            resolve('create new product detail succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.updateDetailData = (producDetailID,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.ProductDetail.update({ 
                name: data.name, 
                description: data.description,
                productId: data.productId
                }, {
                    where: {
                    id: producDetailID
                    }
            });
            resolve('update product detail succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteDetail = (producDetailID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.ProductDetail.destroy({
                    where: {
                    id: producDetailID
                    }
            });
            resolve('delete product detail succeed')

        } catch (e) {
            reject(e);
        }
    })
}