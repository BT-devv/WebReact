export const orderColums = [
    { field: 'id', headerName: 'ID', width: 10},
    { field: 'total_price', headerName: 'Total Price', width: 100
    },
    {field: "order_date", headerName: "Order Date", width: 250},
    {field: "user_id", headerName: "User ID", width: 100},
    {field: "status", headerName: "Status", width: 160, renderCell: (params) =>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }
},

]
export const productColums = [
    { field: 'id', headerName: 'ID', width: 10},
    { field: 'name', headerName: 'Product Name', width: 250
    },
    {field: "gender", headerName: "Gender", width: 100},
    {field: "type", headerName: "Type", width: 100},
]
export const productCategoryColums = [
    { field: 'id', headerName: 'ID', width: 20},
    { field: 'name', headerName: 'Product Category Name', width: 300}
]
export const productDetailColumns = [
    { field: 'id', headerName: 'ID', width: 10 },{
        field: 'name', headerName: 'Product Detail Name', width: 550, renderCell:(params) =>{
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.imageCover} alt="avatar"/> */}
                    {params.row.name}
                </div>
            )
        }
    },
    {field: "price", headerName: "Price", width: 100},
    {field: "description", headerName: "Description", width: 200},
    {field: "quantity", headerName: "Quantity", width: 100},
    {field: "sizes", headerName: "sizes", width: 100},
    {
        field: "colors",
        headerName: "Colors",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="cellWithColors">
              {params.row.colors.map((color, index) => (
                <div
                  key={index}
                  className="colorBox"
                  style={{ backgroundColor: color.code_color }}
                >
                  {color.color}
                </div>
              ))}
            </div>
          );
        },
      },
    
];

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },{
        field: 'user', headerName: 'Username', width: 250, renderCell:(params) =>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {field: "email", headerName: "Email", width: 250},
    {field: "roles", headerName: "Role", width: 100},
    {field: "adress", headerName: "Address", width: 100},
    {field: "birth", headerName: "Birth", width: 150},
    
];

// export const productRows = [
//     {
//         id: 1,
//         name: "Áo thun tay ngắn cổ tròn",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         price: 290,
//         quantity: 100,
//         status:"còn hàng"
//     },
//     {
//         id: 2,
//         name: "Áo thun tay ngắn cổ tròn",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         price: 290,
//         quantity: 100,
//         status:"còn hàng"
//     },
//     {
//         id: 3,
//         name: "Áo thun tay ngắn cổ tròn",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         price: 290,
//         quantity: 100,
//         status:"còn hàng"
//     },
//     {
//         id: 4,
//         name: "Áo thun tay ngắn cổ tròn",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         price: 290,
//         quantity: 100,
//         status:"còn hàng"
//     },
// ]
// export const userRows = [
//     {
//         id: 1,
//         username: "phamvan",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         gender: "Women",
//         email: "phamvan2003@gmail.com",
//     },
//     {
//         id: 2,
//         username: "tuanbui",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         gender: "Men",
//         email: "tuanbui2003@gmail.com",
//     },
//     {
//         id: 3,
//         username: "phamvan",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         gender: "Women",
//         email: "phamvan2003@gmail.com",
//     },
//     {
//         id: 4,
//         username: "tuanbui",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         gender: "Men",
//         email: "tuanbui2003@gmail.com",
//     },
//     {
//         id: 5,
//         username: "phamvan",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         email: "phamvan2003@gmail.com",
//         gender: "Women",
//     },
//     {
//         id: 6,
//         username: "tuanbui",
//         img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
//         email: "tuanbui2003@gmail.com",
//         gender: "Men",
//     },
// ]