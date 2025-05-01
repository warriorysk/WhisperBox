import express  from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';


import { connectDB } from './lib/db.js';

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.listen(port, () => {
  console.log('Server is running on port :' + port); 
  connectDB();
})