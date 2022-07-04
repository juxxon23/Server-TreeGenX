const crypt = require('../../common/helpers/crypt.js');
const UserModel = require('../../user/models/user.model');

exports.userMatch = async (req, res, next) => {
  try {
    let user = await UserModel.findUserByEmail(req.body.email)
    if (!user) {
        res.status(404).send({msg: 'not found'});
    } else {
      let result = await crypt.checkPass(req.body.userpass, user.userpass);
      if (result) {
        return next();
      } else {
        res.status(400).send({msg: 'invalid credentials'})
      }
    }
  } catch (error) {
    next(error)
  }
}
