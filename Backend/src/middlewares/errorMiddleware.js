import AppError from '../exceptions/AppError.js';
import { errorResponse } from '../responses/httpResponse.js';

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof AppError) {
        return errorResponse(res, err.message, err.statusCode);
    }
    return errorResponse(res, 'Error interno del servidor.', 500);
};

export default errorMiddleware;
