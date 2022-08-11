import createExpressServer from "express";
//import { Router } from "express";
import dotenv from "dotenv";

//const crearServer = Router();

dotenv.config(/*{path : "../.env"}*/);
const PORT = process.env.PORT;
const expressApp = createExpressServer();

export function iniciarServer(){
    expressApp.listen(PORT, (req, res) => {
        console.log("Servidor listo en el puerto " + PORT);
    })
}


