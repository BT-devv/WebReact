const StaticData = require('../utils/StaticData');
const bcrypt = require('bcrypt');
const db = require('../models/index');

exports.createNewUser = async (data) => {
    try {
        await db.User.create({
            username: data.username,
            email: data.email,
            password: await bcrypt.hash(data.password, 10),
            firstName: data.firstName,
            lastName: data.lastName,
            img: "imgzan.png",
            address: data.address,
            phone: data.phone,
            birth: data.birth,
            role: StaticData.AUTH.Role.admin,
            gender: data.gender === '1',
        });
        return 'Tạo người dùng thành công';
    } catch (e) {
        throw e;
    }
};

exports.getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            raw: true,
        });
        return users;
    } catch (e) {
        throw e;
    }
};

exports.getUserInfoById = async (userId) => {
    try {
        let user = await db.User.findOne({
            where: { id: userId },
        });

        return user || {};
    } catch (e) {
        throw e;
    }
};

exports.getUserbyUserName = async (username) => {
    try {
        let user = await db.User.findOne({
            where: {
                username: username,
            },
        });
        return user || {};
    } catch (e) {
        throw e;
    }
};

exports.updateUserData = async (userId, data) => {
    try {
        await db.User.update(
            {
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                address: data.address,
            },
            {
                where: {
                    id: userId,
                },
            }
        );
        return 'Cập nhật thông tin người dùng thành công';
    } catch (e) {
        throw e;
    }
};

exports.deleteUserById = async (userId) => {
    try {
        await db.User.destroy({
            where: {
                id: userId,
            },
        });
        return 'Xóa người dùng thành công';
    } catch (e) {
        throw e;
    }
};
