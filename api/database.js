import mysql from "mysql";
export const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456aA@",
    database: "clothes"
});
database.connect(function(err){
    if (err) throw err;
    console.log("Connected!!!")
})

