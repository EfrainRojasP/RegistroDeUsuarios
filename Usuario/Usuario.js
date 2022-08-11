export class Usuario{
    //id = null;
    guidUsuaio;
    nombreUsuario;
    apPaternoUsuario;
    apMaternoUsuario;
    emailUsuario;
    passUsuario;
    FK_tipoUsuario;
    
    constructor(guidUsuaio, nombreUsuario, apPaternoUsuario, apMaternoUsuario, emailUsuario, passUsuario, tipoUsuario) {
        this.guidUsuaio = guidUsuaio;
        this.nombreUsuario = nombreUsuario;
        this.apPaternoUsuario = apPaternoUsuario;
        this.apMaternoUsuario = apMaternoUsuario;
        this.emailUsuario = emailUsuario;
        this.passUsuario = passUsuario;
        this.FK_tipoUsuario = tipoUsuario;
    }
}