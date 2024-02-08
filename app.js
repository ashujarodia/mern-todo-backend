import express from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import cors from 'cors';

export const app = express();

//using middlewares
app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:5173'],
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
