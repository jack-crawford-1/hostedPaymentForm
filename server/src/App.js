import express from 'express';
import cors from 'cors';
import purchaseRoutes from './routes/purchaseRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

import captureRoutes from './routes/captureRoutes.js';

app.use('/api/proxy', purchaseRoutes);
app.use('/api/capture', captureRoutes);
app.use(errorHandler);

export default app;
