const db = require('../models/index');

// Hàm lấy tất cả thông tin màu sắc
exports.getAllColors = async () => {
    try {
      const colors = await db.Color.findAll();
      return colors;
    } catch (error) {
      throw error;
    }
  };  

// Hàm lấy thông tin màu sắc bằng Id
exports.getColorById = async (id) => {
  try {
    const color = await db.Color.findByPk(id);
    return color;
  } catch (error) {
    throw error;
  }
};

// Hàm cập nhật thông tin màu sắc
exports.updateColor = async (id, data) => {
    try {
      const [affectedRowsCount, affectedRows] = await db.Color.update(
        {
          color: data.color,
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
        throw new Error('Không tìm thấy màu sắc');
      }
  
      // Trả về thông tin màu sắc sau khi cập nhật
      return affectedRows[0];
    } catch (error) {
      throw error;
    }
};
  

// Hàm xóa màu sắc
exports.deleteColor = async (id) => {
    try {
      const deletedColor = await db.Color.destroy({
        where: { id: id }, // Điều kiện WHERE để xác định bản ghi cần xóa
        returning: true,   // Trả về thông tin của màu sắc đã bị xóa
      });
  
      // Kiểm tra xem có bản ghi nào bị xóa không
      if (deletedColor === 0) {
        throw new Error('Không tìm thấy màu sắc');
      }
  
      // Trả về thông tin của màu sắc đã bị xóa (không cần thiết, chỉ là ví dụ)
      return deletedColor;
    } catch (error) {
      throw error;
    }
};

// Hàm thêm màu sắc nếu chưa tồn tại
exports.addColorIfNotExisted = async (data) => {
    try {
      const existingColor = await db.Color.findOne({
        where: {
          color: data.color,
          productId: data.productID,
          productDetailId: data.productDetailID,
        },
      });
  
      if (!existingColor) {
        const newColor = await db.Color.create({
          color: data.color,
          productId: data.productID,
          productDetailId: data.productDetailID,
        });
  
        return newColor;
      }
  
      return existingColor;
    } catch (error) {
      throw error;
    }
};
  
  