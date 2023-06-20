import mysql from "mysql";
export const database = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "clothes"
});
database.connect(function(err){
    if (err) throw err;
    console.log("Connected!!!")
})

