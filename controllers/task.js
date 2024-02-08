import { Task } from '../models/task.js';

export const addTask = async (req, res) => {
	try {
		const { title, desc } = req.body;
		await Task.create({ title, desc, user: req.user });
		res.status(200).json({
			success: true,
			message: 'Task added successfully',
		});
	} catch (error) {
		console.log(error);
	}
};

export const getTasks = async (req, res) => {
	try {
		const userId = req.user._id;
		const tasks = await Task.find({ user: userId });
		if (!tasks) {
			return res.status(404).json({
				success: false,
				message: 'Tasks not found',
			});
		}
		res.status(200).json({
			success: true,
			tasks,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteTask = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({
				success: false,
				message: 'Task not found',
			});
		}
		await task.deleteOne();
		res.status(200).json({
			success: true,
			message: 'Task deleted',
		});
	} catch (error) {
		console.log(error);
	}
};
export const updateTask = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({
				success: false,
				message: 'Task not found',
			});
		}
		task.isCompleted = !task.isCompleted;
		await task.save();
		res.status(200).json({
			success: true,
			message: 'Task updated',
		});
	} catch (error) {
		console.log(error);
	}
};
