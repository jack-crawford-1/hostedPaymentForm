import express from 'express';
import cors from 'cors';
import purchaseRoutes from './routes/purchaseRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/proxy', purchaseRoutes);
app.use(errorHandler);

export default app;
