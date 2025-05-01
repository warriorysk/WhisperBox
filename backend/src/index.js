import express  from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import { connectDB } from './lib/db.js';

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.listen(port, () => {
  console.log('Server is running on port :' + port); 
  connectDB();
})