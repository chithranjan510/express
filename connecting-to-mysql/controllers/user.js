const User = require('../models/user');

exports.getUsersList = (req, res, next) => {
  User.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  User.create({
    name: name,
    email: email,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  console.log('reached---------------------------');
  const userId = +req.params.userId;
  console.log(+req.params.userId);
  User.destroy({
    where: {
      id: userId,
    },
  }).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  })
};
