const db = require('../models/index');

exports.getAllDetail = async () => {
    try {
        const details = await db.ProductDetail.findAll({
            raw: true,
        });
        return details;
    } catch (error) {
        throw error;
    }
}

exports.getDetail = async (productDetailId) => {
    try {
        const detail = await db.ProductDetail.findOne({
            where: { id: productDetailId },
            raw: true,
        });

        return detail || {};
    } catch (error) {
        throw error;
    }
}

exports.createDetail = async (data) => {
    try {
        await db.ProductDetail.create({
            name: data.name,
            description: data.description,
            ProductId: data.ProductId,
            CategoryId: data.CategoryId
        });
        return 'Tạo mới chi tiết sản phẩm thành công';
    } catch (error) {
        throw error;
    }
}

exports.updateDetailData = async (productDetailId, data) => {
    try {
        await db.ProductDetail.update(
            {
                name: data.name,
                description: data.description,
                ProductId: data.ProductId,
                CategoryId: data.CategoryId
            },
            {
                where: {
                    id: productDetailId,
                },
            }
        );
        return 'Cập nhật chi tiết sản phẩm thành công';
    } catch (error) {
        throw error;
    }
}

exports.deleteDetail = async (productDetailId) => {
    try {
        await db.ProductDetail.destroy({
            where: {
                id: productDetailId,
            },
        });
        return 'Xóa chi tiết sản phẩm thành công';
    } catch (error) {
        throw error;
    }
}
