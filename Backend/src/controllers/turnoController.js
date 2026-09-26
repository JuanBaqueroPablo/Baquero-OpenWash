import turnoService from '../services/turnoService.js';
import { successResponse } from '../responses/httpResponse.js';

const getAll = (req, res, next) => {
    try {
        const turnos = turnoService.getAll();
        return successResponse(res, turnos);
    } catch (error) {
        next(error);
    }
};

const getById = (req, res, next) => {
    try {
        const turno = turnoService.getById(req.params.id);
        return successResponse(res, turno);
    } catch (error) {
        next(error);
    }
};

const create = (req, res, next) => {
    try {
        const turno = turnoService.create(req.body);
        return successResponse(res, turno, 201);
    } catch (error) {
        next(error);
    }
};

const update = (req, res, next) => {
    try {
        const turno = turnoService.update(req.params.id, req.body);
        return successResponse(res, turno);
    } catch (error) {
        next(error);
    }
};

const remove = (req, res, next) => {
    try {
        const turno = turnoService.remove(req.params.id);
        return successResponse(res, turno);
    } catch (error) {
        next(error);
    }
};

export default { getAll, getById, create, update, remove };
