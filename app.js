import express from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import cors from 'cors';
import { config } from 'dotenv';

export const app = express();
config({
	path: './data/config.env',
});

//using middlewares
app.use(express.json());
app.use(
	cors({
		origin: [process.env.FRONTEND_URI],
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);

//routes
app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
	res.send('working');
});
