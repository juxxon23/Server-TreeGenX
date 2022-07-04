const UserModel = require('../models/user.model');

exports.insert = async (req, res) => {
	const userInsert = await UserModel.createUser(req.body);
	res.status(200).json({func: 'insert function!', msg: userInsert});
	}
	
exports.list = async (req, res) => {
	const userList = await UserModel.listUsers();
	res.status(200).json({func: 'list function!', msg: userList, jwt: req.jwt});
	}
	
exports.getById = async (req, res) => {
	const userById = await UserModel.findUserById(req.params.userId);
	res.status(200).json({func: 'find user by id function!', msg: userById});
	}
	
exports.updateById = async (req, res) => {
	const userUpdate = await UserModel.updateUser(req.params.userId, req.body);
	res.status(200).json({func: 'update user function!', msg: userUpdate});
	}
	
exports.removeById = async (req, res) => {
	const userRemove = await UserModel.removeById(req.params.userId);
	res.status(200).json({func: 'remove user function!', msg: userRemove});
	}

