const jwt = require('jsonwebtoken');
const config = require('../../common/config/env.config');

exports.createToken = async (data) => {
  try {
    const tk = await jwt.sign(data, config.jwt_secret, { expiresIn: config.jwt_expiration });
    return tk;
  } catch (error) {
    console.log(error);
  }
}

exports.verifyToken = async (token) => {
  try {
    const tkVerification = await jwt.verify(token, config.jwt_secret);
    return tkVerification;
  } catch (error) {
    console.log(error)
  }
}
