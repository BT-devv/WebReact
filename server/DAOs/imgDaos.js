const db = require('../models/index');

// Hàm lấy tất cả thông tin hình ảnh
exports.getAllImages = async () => {
    try {
      const images = await db.Image.findAll();
      return images;
    } catch (error) {
      throw error;
    }
  };
  
// Hàm lấy thông tin hình ảnh bằng Id
exports.getImageById = async (id) => {
  try {
    const image = await db.Image.findByPk(id);
    return image;
  } catch (error) {
    throw error;
  }
};



// Hàm xóa hình ảnh
exports.deleteImage = async (id) => {
  try {
    const deletedImage = await db.Image.destroy({
      where: { id: id }, // Điều kiện WHERE để xác định bản ghi cần xóa
      returning: true,   // Trả về thông tin của hình ảnh đã bị xóa
    });

    // Kiểm tra xem có bản ghi nào bị xóa không
    if (deletedImage === 0) {
      throw new Error('Không tìm thấy hình ảnh');
    }

    // Trả về thông tin của hình ảnh đã bị xóa (không cần thiết, chỉ là ví dụ)
    return deletedImage;
  } catch (error) {
    throw error;
  }
};

// Hàm thêm hình ảnh nếu chưa tồn tại
exports.addImageIfNotExisted = async (pr_id,img) => {
  try {
    const existingImage = await db.Image.findOne({
      where: {
        name: img,
        productDetail_id: pr_id,
      },
    });

    if (!existingImage) {
      const newImage = await db.Image.create({
        name: img,
        productDetail_id: pr_id,
      });

      return newImage;
    }

    return existingImage;
  } catch (error) {
    throw error;
  }
};
