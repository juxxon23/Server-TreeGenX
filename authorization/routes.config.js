const AuthorizationController = require('./controllers/authorization.controller');
const VerifyLogMiddleware = require('./middlewares/verifylog.middleware');
const express = require('express');

const router = express.Router();

router.post('/', [VerifyLogMiddleware.userMatch], AuthorizationController.login);

exports.router = router;
