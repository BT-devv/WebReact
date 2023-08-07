const db = require('../models/index');

exports.getAllCategory = async () => {
    try {
        const categories = await db.Category.findAll({
            raw: true,
        });
        return categories;
    } catch (error) {
        throw error;
    }
};

exports.getCategory = async (categoryId) => {
    try {
        const category = await db.Category.findOne({
            where: { id: categoryId },
            raw: true,
        });

        return category || {};
    } catch (error) {
        throw error;
    }
};

exports.createCategory = async (data) => {
    try {
        await db.Category.create({
            name: data.name,
        });
        return 'Tạo mới danh mục thành công';
    } catch (error) {
        throw error;
    }
};

exports.updateCategoryData = async (categoryId, data) => {
    try {
        await db.Category.update(
            {
                name: data.name,
            },
            {
                where: {
                    id: categoryId,
                },
            }
        );
        return 'Cập nhật danh mục thành công';
    } catch (error) {
        throw error;
    }
};

exports.deleteCategory = async (categoryId) => {
    try {
        await db.Category.destroy({
            where: {
                id: categoryId,
            },
        });
        return 'Xóa danh mục thành công';
    } catch (error) {
        throw error;
    }
};
