const StaticData = require('../utils/StaticData')
const bcrypt =require ('bcrypt');
const db = require('../models/index');

const salt = bcrypt.genSaltSync(10);

exports.createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            await db.User.create({
                username:data.username,
                email: data.email,
                password: await bcrypt.hash(data.password,10),
                firstname: data.firstname,
                lastName: data.lastname,
                img:"img.png",
                adress: data.adress,
                phone: data.phone,
                birth:data.birth,
                role: StaticData.AUTH.Role,
                gender: data.gender === '1' ? true : false,
                
            })
            resolve('create new user succeed');

        } catch (e) {
            reject(e);
        }
    })

}

exports.hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            //lưu ý, truyền vào đúng password cần hash
            // let hashPassWord = await bcrypt.hashSync("B4c0/\/", salt); => copy paste mà ko edit nè
            let hashPassWord = await bcrypt.hashSync(password, salt);

            resolve(hashPassWord);
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
                where:{username:username},
                raw:true
            })
            if (user) resolve(user)
            else resolve({})
        } catch (e) {
            reject(e);
        }
    })
}

exports.updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id },

            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);

            } else {
                resolve();

            }

        } catch (e) {
            console.log(e);
        }
    })
}

exports.deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();

            }

            resolve();

        } catch (e) {
            reject(e);
        }
    })
}



