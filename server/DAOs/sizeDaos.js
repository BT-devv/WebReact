const db = require('../models/in');

// Hàm lấy tất cả thông tin kích thước
exports.getAllSizes = async () => {
  try {
    const sizes = await db.Size.findAll();
    return sizes;
  } catch (error) {
    throw error;
  }
};

// Hàm lấy thông tin kích thước bằng Id
exports.getSizeById = async (id) => {
  try {
    const size = await db.Size.findByPk(id);
    return size;
  } catch (error) {
    throw error;
  }
};

// Hàm cập nhật thông tin kích thước
exports.updateSize = async (id, data) => {
  try {
    const [affectedRowsCount, affectedRows] = await db.Size.update(
      {
        size: data.size,
        productId: data.productID,
        productDetailId: data.producDetailID,
      },
      {
        where: { id: id }, // Điều kiện WHERE để xác định bản ghi cần cập nhật
        returning: true,   // Trả về thông tin các bản ghi đã bị ảnh hưởng sau khi cập nhật
      }
    );

    // Kiểm tra xem có bản ghi nào bị ảnh hưởng không
    if (affectedRowsCount === 0) {
      throw new Error('Không tìm thấy kích thước');
    }

    // Trả về thông tin kích thước sau khi cập nhật
    return affectedRows[0];
  } catch (error) {
    throw error;
  }
};


// Hàm xóa kích thước
exports.deleteSize = async (id) => {
  try {
    const deletedSize = await db.Size.destroy({
      where: { id: id }, // Điều kiện WHERE để xác định bản ghi cần xóa
      returning: true,   // Trả về thông tin của kích thước đã bị xóa
    });

    // Kiểm tra xem có bản ghi nào bị xóa không
    if (deletedSize === 0) {
      throw new Error('Không tìm thấy kích thước');
    }

    // Trả về thông tin của kích thước đã bị xóa (không cần thiết, chỉ là ví dụ)
    return deletedSize;
  } catch (error) {
    throw error;
  }
};

// Hàm thêm kích thước nếu chưa tồn tại
exports.addSizeIfNotExisted = async (data) => {
  try {
    const existingSize = await db.Size.findOne({
      where: {
        size: data.size,
        productId: data.productID,
        productDetailId: data.productDetailID,
      },
    });

    if (!existingSize) {
      const newSize = await db.Size.create({
        size: data.size,
        productId: data.productID,
        productDetailId: data.productDetailID,
      });

      return newSize;
    }

    return existingSize;
  } catch (error) {
    throw error;
  }
};


