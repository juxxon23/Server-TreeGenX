const mongoose = require('mongoose');
const config = require('../config/db.config.js');

let count = 0
const options = {
	authSource: "admin",
	user: "grimdev",
	pass: "pass1234",
	useUnifiedTopology: true,
	useNewUrlParser: true	
	}

const connectWithRetry = () => {
	console.log('MongoDB connection with retry');
	mongoose.connect(config.MONGODB_URI, options)
	.then((res) => console.log('MongoDB is connected'))
	.catch((err) => {
		console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count, err.message);
		setTimeout(connectWithRetry, 5000)
		})
	};
	
connectWithRetry();

exports.mongoose = mongoose;
