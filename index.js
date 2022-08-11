console.clear();

import createExpressServer from "express";
import dotenv from "dotenv";
import {inicarConexionMYSQL} from "./ConexionBD/ConexionMYSQL.js"
import cuentaRuter from "./Rutas/Cuenta.js";

dotenv.config()
const expressApp = createExpressServer();
const PORT = process.env.PORT;

expressApp.use(createExpressServer.json());
expressApp.use(createExpressServer.text());
expressApp.use(createExpressServer.static("./public"));
expressApp.use("/login.html", cuentaRuter);

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