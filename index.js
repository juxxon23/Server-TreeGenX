const express = require('express');
const cors = require('cors');

const config = require('./common/config/env.config.js');
const userConfig = require('./user/routes.config');
const authConfig = require('./authorization/routes.config');

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
app.use("/user", userConfig.router);
app.use("/auth", authConfig.router);


app.listen(config.port, function () {
	console.log('app Listening at port %s', config.port);
});
