const UserModel = require('../models/user.model');

module.exports = {
	insert: function (req, res) {
		UserModel.createUser(req.body)
		.then((result) => {
			res.status(200).json({func: 'insert function!', msg: result});
			})
		},
	list: function (req, res) {
		UserModel.list()
		.then((result) => {
			res.status(200).json({func: 'list function!', msg: result});
			});
		},
	getById: function (req, res) {
		UserModel.findUserById(req.params.userId)
		.then((result) => {
			res.status(200).json({func: 'find user by id function!', msg: result});
			});
		},
	updateById: function (req, res) {
		UserModel.updateUser(req.params.userId, req.body)
		.then((result) => {
			res.status(200).json({func: 'update user function!', msg: result});
			})
		},
	removeById: function (req, res) {
		UserModel.removeById(req.params.userId)
		.then((result) => {
			res.status(200).json({func: 'remove user function!', msg: result});
			})
		}
}
