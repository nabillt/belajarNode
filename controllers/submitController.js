import { createConnection } from "mysql2"

export const submitController = (req,res) =>{
    const db = createConnection({
        host:"127.0.0.1",
        port:3306,
        user:"root",
        password:"",
        database:"siswaa",
    })
    const nama = req.body.nama;
    const email = req.body.email;
    const password = req.body.password;


    db.query(`insert into siswa(nama,email,password) values('${nama}','${email}','${password}')`)

    res.redirect('/')
}