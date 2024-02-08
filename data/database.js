import mongoose from 'mongoose';

export const connectDB = () => {
	mongoose.connect('mongodb://localhost:27017', {
		dbName: 'learnnodejs',
	})
		.then((c) => console.log(`Database connected with ${c.connection.host}`))
		.catch((e) => console.log(e));
};
