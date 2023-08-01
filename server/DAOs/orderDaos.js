const db = require('../models/index');

exports.getAllOrder = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findAll({
                raw: true,
            });
            resolve(order)
        } catch (e) {
            reject(e);
        }
    })
}

exports.getDetail = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findOne({
                where: { id: orderId },
                raw: true,

            });

            if (order) {
                resolve(order)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}


exports.createOrder = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Order.create({
                status:data.status,
                userID: data.userID,
            },{
                where:{
                    userID: db.User.id
                }
            })
            resolve('create new Order succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.updateDetailData = (orderId,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.update({ 
                status:data.status,
                userID: data.userID,
                }, {
                    where: {
                    id: orderId
                    }
            });
            resolve('update order succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteOrder = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.destroy({
                    where: {
                    id: orderId
                    }
            });
            resolve('delete order succeed')

        } catch (e) {
            reject(e);
        }
    })
}