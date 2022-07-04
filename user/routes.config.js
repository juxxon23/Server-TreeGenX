const UserController = require('./controllers/user.controller');
const TkValidation = require('../authorization/middlewares/tkvalidation.middleware');
const express = require('express');

const router = express.Router();

router.get('/', [TkValidation.tokenValidation], UserController.list);
router.get('/:userId', [TkValidation.tokenValidation], UserController.getById);
router.post('/', UserController.insert);
router.put('/:userId', [TkValidation.tokenValidation], UserController.updateById);
router.delete('/:userId', [TkValidation.tokenValidation], UserController.removeById);

exports.router = router;
