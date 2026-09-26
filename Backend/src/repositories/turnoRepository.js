const turnos = [];

const getAll = () => {
    return turnos;
};

const getById = (id) => {
    return turnos.find(turno => turno.id === id);
};

const create = (turno) => {
    turnos.push(turno);
    return turno;
};

const update = (id, datos) => {
    const index = turnos.findIndex(turno => turno.id === id);
    if (index === -1) return null;
    turnos[index] = { ...turnos[index], ...datos };
    return turnos[index];
};

const remove = (id) => {
    const index = turnos.findIndex(turno => turno.id === id);
    if (index === -1) return null;
    const eliminado = turnos.splice(index, 1);
    return eliminado[0];
};

export default { getAll, getById, create, update, remove };
