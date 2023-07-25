const db = require('../models/index');

exports.getAllCategory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let categorys = await db.Category.findAll({
                raw: true,
            });
            resolve(categorys)
        } catch (e) {
            reject(e);
        }
    })
}

exports.getCategory = (categoryID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({
                where: { id: categoryID },
                raw: true,

            });

            if (category) {
                resolve(category)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}


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

exports.updateCategoryData = (categoryID,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.update({ 
                name: data.name, 
                }, {
                    where: {
                    id: categoryID
                    }
            });
            resolve('update category succeed')        
        } catch (e) {
            reject(e)
        }
    })
}

exports.deleteCategory = (categoryID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.destroy({
                    where: {
                    id: categoryID
                    }
            });
            resolve('delete category succeed')

        } catch (e) {
            reject(e);
        }
    })
}