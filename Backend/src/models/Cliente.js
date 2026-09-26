import Usuario from './Usuario.js';

class Cliente extends Usuario {
    constructor(id, nombre, email, contraseña, telefono) {
        super(id, nombre, email, contraseña, 'cliente');
        this.telefono = telefono;
    }
}

export default Cliente;
