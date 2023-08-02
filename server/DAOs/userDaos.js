const StaticData = require('../utils/StaticData')
const bcrypt =require ('bcrypt');
const db = require('../models/index');

exports.createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                username:data.username,
                email: data.email,
                password: await bcrypt.hash(data.password,10),
                firstName: data.firstName,
                lastName: data.lastName,
                img:"imgzan.png",
                adress: data.adress,
                phone: data.phone,
                birth:data.birth,
                role: StaticData.AUTH.Role.admin,
                gender: data.gender === '1' ? true : false,
            })
            resolve('create new user succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

exports.getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,

            });

            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}

exports.getUserbyUserName = (username)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{
                    username: username,
                },
            })
            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}

exports.updateUserData = (userid,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.update({ 
                firstName: data.firstname, 
                lastName: data.lastname, 
                phone: data.phone, 
                adress: data.adress, 
                }, {
                    where: {
                    id: userid
                    }
            });
            resolve('update user succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.destroy({
                    where: {
                    id: userId
                    }
            });
            resolve('delete user succeed')

        } catch (e) {
            reject(e);
        }
    })
}



