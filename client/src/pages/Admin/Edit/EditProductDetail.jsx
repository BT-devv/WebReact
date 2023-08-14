import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api-detail/${id}`)
      .then((response) => {
        setProduct(response.data.data.details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleUpdate = () => {
    // Thực hiện cập nhật thông tin sản phẩm thông qua API
    // ...
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product Detail - ID: {id}</h2>
      <form onSubmit={handleUpdate}>
        {/* Các trường để cập nhật thông tin sản phẩm */}
        <label>Product Name</label>
        <input
          type="text"
          value={product.productDetail_name}
          onChange={(e) =>
            setProduct({ ...product, productDetail_name: e.target.value })
          }
        />
        {/* ... Thêm các trường khác */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProductDetail;
