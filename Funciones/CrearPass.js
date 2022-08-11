import { nanoid } from "nanoid";

export function crearPass(tamPass){
    const pass = nanoid(tamPass);
    return pass; 
}