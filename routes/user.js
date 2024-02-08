import express from 'express';
import { getUserDetails, login, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getUser', isAuthenticated, getUserDetails);

export default router;
