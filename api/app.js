import express from 'express';

import airlineRouter from './routes/airlineRouter.js';
import airportRouter from './routes/airportRouter.js';
import cityRouter from './routes/cityRouter.js';
import countryRouter from './routes/countryRouter.js';
import tripRouter from './routes/tripRouter.js';

// import userRouter from './routes/userRouter.js';
// import adminRouter from '';

const app = express();

app.use(express.json());

// Escenario 1, usuario no logado, puede hacer consultas, registrarse y logarse
app.use('/api/airlines', airlineRouter);
app.use('/api/airports', airportRouter);
app.use('/api/cities', cityRouter);
app.use('/api/countries', countryRouter);
app.use('/api/trips', tripRouter);

// Escenario 2, logado como 'user', puede hacer consultas, guardar y borrar sus rutas
// app.use('/api/users', userRouter);

// Escenario 3, logado como 'admin', puede consultar y borrar datos de cualquier usuario
// app.use('/api/admin', adminRouter);


export default app;