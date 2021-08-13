const UserController = require('./controllers/user.controller');
const express = require('express');

const router = express.Router();

router.get('/', UserController.list);
router.get('/:userId', UserController.getById);
router.post('/', UserController.insert);
router.put('/:userId', UserController.updateById);
router.delete('/:userId', UserController.removeById);

exports.router = router;
