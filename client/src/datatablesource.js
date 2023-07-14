
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },{
        field: 'user', headerName: 'User', width: 250, renderCell:(params) =>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {field: "email", headerName: "Email", width: 250},
    {field: "age", headerName: "Age", width: 100},
    {field: "status", headerName: "Status", width: 160, renderCell: (params) =>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }
},
];


export const userRows = [
    {
        id: 1,
        username: "phamvan",
        img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
        status: "active",
        email: "phamvan2003@gmail.com",
        age: 20,
    },
    {
        id: 2,
        username: "tuanbui",
        img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
        status: "passive",
        email: "tuanbui2003@gmail.com",
        age: 20,
    },
    {
        id: 3,
        username: "phamvan",
        img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
        status: "active",
        email: "phamvan2003@gmail.com",
        age: 20,
    },
    {
        id: 4,
        username: "tuanbui",
        img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
        status: "active",
        email: "tuanbui2003@gmail.com",
        age: 20,
    },
    {
        id: 5,
        username: "phamvan",
        img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
        email: "phamvan2003@gmail.com",
        status: "active",
        age: 20,
    },
    {
        id: 6,
        username: "tuanbui",
        img: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1",
        email: "tuanbui2003@gmail.com",
        status: "active",
        age: 20,
    },
]