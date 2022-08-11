import mysql from "mysql";


const conexionMYSQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '21350821Dd',
    database: 'DB_User_Login'
});

const inicarConexionMYSQL = () => {
    return new Promise((resolve, reject) => {
        conexionMYSQL.connect(function (err) {
            if (err) {
                reject(err.stack);
            }
            resolve(conexionMYSQL.threadId);
        });
    });
}

/*conexionMYSQL.connect(err => {
    if(err){
        console.log("ERROR");
        throw err;
    } else {
        console.log("Conexion exitosa a la BD");
    }
});*/

/*conexionMYSQL.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
    }
  
    console.log('connected as id ' + conexionMYSQL.threadId);
  });
};*/

const agregarUsuario = (objUsuario) => {
    //const stm = "INSERT INTO Usuario VALUES ?";
    const stm = "INSERT INTO Usuario SET ?";
    const query = conexionMYSQL.query(stm, objUsuario, function (error, results, fields) {
        if (error) throw error;
        // Neat!
        console.log("Se agrego un usuario a la BD");
    });
    //console.log(query.sql);
};


export { inicarConexionMYSQL, agregarUsuario };