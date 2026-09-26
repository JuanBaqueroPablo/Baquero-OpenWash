import turnoRepository from '../repositories/turnoRepository.js';
import { NotFoundError, BadRequestError } from '../exceptions/AppError.js';
import { Messages } from '../enums/Messages.js';
import generateId from '../utils/generateId.js';

const getAll = () => {
    return turnoRepository.getAll();
};

const getById = (id) => {
    const turno = turnoRepository.getById(Number(id));
    if (!turno) throw new NotFoundError(Messages.TURNO_NOT_FOUND);
    return turno;
};

const create = (datos) => {
    const { fecha, hora, estado, precio } = datos;
    if (!fecha || !hora || !estado || !precio) {
        throw new BadRequestError(Messages.INVALID_DATA);
    }
    const nuevoTurno = {
        id: generateId(),
        fecha,
        hora,
        estado,
        precio
    };
    return turnoRepository.create(nuevoTurno);
};

const update = (id, datos) => {
    const turno = turnoRepository.getById(Number(id));
    if (!turno) throw new NotFoundError(Messages.TURNO_NOT_FOUND);
    return turnoRepository.update(Number(id), datos);
};

const remove = (id) => {
    const turno = turnoRepository.getById(Number(id));
    if (!turno) throw new NotFoundError(Messages.TURNO_NOT_FOUND);
    return turnoRepository.remove(Number(id));
};

export default { getAll, getById, create, update, remove };
