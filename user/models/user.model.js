const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String
	});

const User = mongoose.model('Users', userSchema);

exports.createUser = (userData) => {
	try {
		const user = new User(userData);
		return user.save();	
	} catch (error) {
		console.error(error);
	}
};

exports.list = () => {
	return new Promise((resolve, reject) => {
		User.find({})
		.exec(function (err, userList) {
			if (err) {
				reject(err)
			} else {
				resolve(userList);
			}
		})
	})
};

exports.findUserById = (id) => {
	return User.findById(id)
	.then((result) => {
		return result;
	});
};

exports.updateUser = (id, username) => {
	return User.findOneAndUpdate({
		_id: id
	}, username, { 
		new: true,
		useFindAndModify: false
	});
};

exports.removeById = (id) => {
	return User.findByIdAndDelete(id);
};
