import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		let user = await User.findOne({ email });
		if (user) {
			return res.status(404).json({
				success: false,
				message: 'User already exists',
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		user = await User.create({ name, email, password: hashedPassword });
		const token = jwt.sign({ _id: user._id }, 'adsfadfasdf');
		res.status(200).json({
			success: true,
			message: 'Register Successfully',
			token,
		});
	} catch (error) {
		console.log(error);
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		let user = await User.findOne({ email }).select('+password');
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'Invalid email',
			});
		}
		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			return res.status(404).json({
				success: false,
				message: 'Invalid password',
			});
		}
		const token = jwt.sign({ _id: user._id }, 'adsfadfasdf');
		res.status(200).json({
			success: true,
			message: 'Logged in successfully',
			token,
		});
	} catch (error) {
		console.log(error);
	}
};
export const getUserDetails = async (req, res) => {
	res.status(200).json({
		success: true,
		user: req.user,
	});
};
