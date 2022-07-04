const tkhandler = require('../helpers/tkhandler');

exports.tokenValidation = async (req, res, next) => {
  if (req.headers['authorization']) {
    try {
      let auth = req.headers['authorization'].split(' ');
      if (auth[0] !== 'Bearer') {
          res.status(401).send({msg: 'No Bearer'});
      } else {
        req.jwt = await tkhandler.verifyToken(auth[1]);
        return next();
      }
    } catch (error) {
      res.status(403).send({msg: 'catch error'})
    }
  } else {
    res.status(401).send({msg: "No auth header"});
  }
}
