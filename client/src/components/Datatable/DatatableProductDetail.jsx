import "./Datatable.scss";

import { React, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productDetailColums } from "../../datatablesource";
import { Link } from "react-router-dom";

import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express.js backend endpoint to fetch all products
    axios
      .get("http://localhost:3001/api-detail")
      .then((response) => {
        setData(response.data.data.detail);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api-detail/${id}`)
      .then((response) => {
        // Remove the deleted product from the state
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product detail:", error);
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action,",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/productDetailAdmin/:id"
              style={{ textDecoration: "none" }}
            >
              <div className="viewLink">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {" "}
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link
          to={{
            pathname: "/productDetailAdmin/news",
          }}
          className="link"
          title="Add new product"
        >
          Add new Product Detail
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productDetailColums.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
