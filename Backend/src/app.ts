import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Route Handling
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('SecureExpense API is running!');
});
  
export default app;