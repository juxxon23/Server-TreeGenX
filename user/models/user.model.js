const crypt = require('../../common/helpers/crypt');
const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: String,
	userpass: String,
	userId: String,
	username: String,
	lastname: String,
	dateBirth: Date,
	});

const User = mongoose.model('Users', userSchema);

exports.createUser = async (userData) => {
	try {
		userData.userpass = await crypt.encryptPass(userData.userpass);
		const user = new User(userData);
		return user.save();
	} catch (error) {
		console.error(error);
	}
};

exports.listUsers = () => {
	try {
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
	} catch (error) {
		console.error(error);
	}
};

exports.findUserById = async (id) => {
	const userFound = await User.findById(id)
	return userFound;
};

exports.updateUser = async (id, userData) => {
	const userUpdated = await User.findOneAndUpdate({
		_id: id
	}, userData, {
		new: true,
		useFindAndModify: false
	});
	return userUpdated;
};

exports.removeById = async (id) => {
	const userRemoved = await User.findByIdAndDelete(id);
	return userRemoved;
};

exports.findUserByEmail = async (email) => {
	let doc = await User.findOne({ email: email });
	return doc;
};
