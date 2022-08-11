import { Router } from "express";
import { crearGUID } from "../Funciones/CrearGUID.js";
import { crearPass } from '../Funciones/CrearPass.js';
import { Usuario } from "../Usuario/Usuario.js";
import { agregarUsuario } from "../ConexionBD/ConexionMYSQL.js";
import { hash } from "bcrypt";

const cuentaRuter = Router();


cuentaRuter.post("/CrearCuenta", async (req, res) => {
    const {nombreUser, apPater, apM, email, rol} = req.body;
    const pass = await hash(crearPass(10), 8);
    const user = new Usuario(crearPass(20), nombreUser, apPater, apM, email, pass, parseInt(rol, 10));
    agregarUsuario(user);
    res.send();
});



export default cuentaRuter;