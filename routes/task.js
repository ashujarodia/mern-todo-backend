import express from 'express';
import { addTask, deleteTask, getTasks, updateTask } from '../controllers/task.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/addTask', isAuthenticated, addTask);
router.get('/getTasks', isAuthenticated, getTasks);
router.delete('/deleteTask/:id', isAuthenticated, deleteTask);
router.put('/updateTask/:id', isAuthenticated, updateTask);

export default router;
