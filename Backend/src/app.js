import express from 'express';
import turnoRoutes from './routes/turnoRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());

app.use('/api/turnos', turnoRoutes);

app.use(errorMiddleware);

export default app;
