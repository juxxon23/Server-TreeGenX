const tkhandler = require('../helpers/tkhandler');

exports.login = async (req, res) => {
  try {
    let token = await tkhandler.createToken(req.body);
    res.status(201).send({token: token, msg: 'welcome'});
  } catch (err) {
    console.log(err);
    res.status(500).send({msg: err});
  }
}
