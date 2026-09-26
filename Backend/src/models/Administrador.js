import Usuario from './Usuario.js';

class Administrador extends Usuario {
    constructor(id, nombre, email, contraseña) {
        super(id, nombre, email, contraseña, 'administrador');
    }
}

export default Administrador;
