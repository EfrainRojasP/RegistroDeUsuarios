console.clear();

import createExpressServer from "express";
import dotenv from "dotenv";
import {inicarConexionMYSQL} from "./ConexionBD/ConexionMYSQL.js"

dotenv.config()
const expressApp = createExpressServer();
const PORT = process.env.PORT;

const main = async () => {  
    try {
        await inicarConexionMYSQL();
        console.log("CONEXION EXITOSA A LA BD");
    } catch (error) {
        console.error("ERROR EN LA CONEXION A LA BD", error);
        return;
    }
    expressApp.listen(PORT, (req, res) => {
        console.log("Servidor listo en el puerto " + PORT);
    })
}
main();