const db = require('../models/index');

exports.getAllOrder = async () => {
    try {
        const orders = await db.Order.findAll({
            raw: true,
        });
        return orders;
    } catch (error) {
        throw error;
    }
}

exports.getOrder = async (orderId) => {
    try {
        const order = await db.Order.findOne({
            where: { id: orderId },
            raw: true,
        });

        return order || {};
    } catch (error) {
        throw error;
    }
}

exports.createOrder = async (data) => {
    try {
        await db.Order.create({
            status: data.status,
            userID: data.userID,
        });

        return 'create new Order succeed';
    } catch (error) {
        throw error;
    }
}

exports.updateOrderData = async (orderId, data) => {
    try {
        await db.Order.update(
            { status: data.status, userID: data.userID },
            { where: { id: orderId } }
        );

        return 'update order succeed';
    } catch (error) {
        throw error;
    }
}

exports.deleteOrder = async (orderId) => {
    try {
        await db.Order.destroy({ where: { id: orderId } });

        return 'delete order succeed';
    } catch (error) {
        throw error;
    }
}
