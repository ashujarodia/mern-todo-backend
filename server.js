import { app } from './app.js';
import { connectDB } from './data/database.js';

const port = 4000;

connectDB();

app.listen(port, () => {
	console.log('Server is working on port: ' + port);
});
