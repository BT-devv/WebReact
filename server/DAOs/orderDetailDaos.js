const db = require('../models/index');

exports.getAllOrderDetail = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderDetail = await db.OrderDetail.findAll({
                raw: true,
            });
            resolve(orderDetail)
        } catch (e) {
            reject(e);
        }
    })
}

exports.getOrderDetail = (orderDetailID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderDetail = await db.OrderDetail.findOne({
                where: { id: orderDetailID },
                raw: true,

            });

            if (orderDetail) {
                resolve(orderDetail)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}


exports.createOrderDetail = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.OrderDetail.create({
                orderId:data.orderId,
                productID: data.productID,
                price: data.price,
                quantity: data.quantity
            },{
                where:{
                    orderId: db.Order.id,
                    productID: db.Product.id
                }
            })
            resolve('create new Order detail succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.updateOrderDetailData = (orderDetailID,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderDetail = await db.OrderDetail.update({ 
                orderId:data.orderId,
                productID: data.productID,
                price: data.price,
                quantity: data.quantity
                }, {
                    where: {
                    id: orderDetailID
                    }
            });
            resolve('update order detail succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteOrderDetail = (orderDetailID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderDetail = await db.OrderDetail.destroy({
                    where: {
                    id: orderDetailID
                    }
            });
            resolve('delete order detail succeed')

        } catch (e) {
            reject(e);
        }
    })
}