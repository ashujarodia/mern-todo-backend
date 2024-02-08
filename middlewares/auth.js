import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';

export const isAuthenticated = async (req, res, next) => {
	const { token } = req.headers;
	if (!token) {
		return res.status(404).json({
			success: false,
			message: 'Token is not present',
		});
	}
	const decoded = jwt.verify(token, 'adsfadfasdf');
	req.user = await User.findById(decoded._id);
	next();
};
