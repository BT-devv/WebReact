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

// Hàm cập nhật thông tin hình ảnh
exports.updateImage = async (id, data) => {
  try {
    const [affectedRowsCount, affectedRows] = await db.Image.update(
      {
        img: data.img,
        productId: data.productID,
        productDetailId: data.productDetailID,
      },
      {
        where: { id: id }, // Điều kiện WHERE để xác định bản ghi cần cập nhật
        returning: true,   // Trả về thông tin các bản ghi đã bị ảnh hưởng sau khi cập nhật
      }
    );

    // Kiểm tra xem có bản ghi nào bị ảnh hưởng không
    if (affectedRowsCount === 0) {
      throw new Error('Không tìm thấy hình ảnh');
    }

    // Trả về thông tin hình ảnh sau khi cập nhật
    return affectedRows[0];
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
exports.addImageIfNotExisted = async (data) => {
  try {
    const existingImage = await db.Image.findOne({
      where: {
        img: data.img,
        productId: data.productID,
        productDetailId: data.productDetailID,
      },
    });

    if (!existingImage) {
      const newImage = await db.Image.create({
        img: data.img,
        productId: data.productID,
        productDetailId: data.productDetailID,
      });

      return newImage;
    }

    return existingImage;
  } catch (error) {
    throw error;
  }
};
