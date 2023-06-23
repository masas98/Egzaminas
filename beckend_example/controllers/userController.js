const User = require("./../models/userModel");
const bcrypt = require("bcryptjs");

exports.getUsers = (req, res) => {
  try {
    User.find()
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(404).json({ error: "Bad request query" });
      });
  } catch {
    res.status(500).json({ error: "Get request failed" });
  }
};

//SIGNUP

exports.signup = (req, res) => {
  const { name, lastName, email, password, role } = req.body;

  let passwordHash;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      passwordHash = hash;
    });
  });

  try {
    User.findOne({ email: email }).then((existingUser) => {
      if (existingUser) {
        res
          .status(422)
          .json({ error: "User already exists, please login instead" });
      } else {
        const createdUser = new User({
          name,
          lastName,
          email,
          password: passwordHash,
          role,
        });
        if (password.length < 6) {
          res.status(404).json({ error: "Password is too short" });
        } else {
          createdUser
            .save()
            .then((doc) => {
              res.status(201).json(doc);
            })
            .catch((error) => {
              res.status(404).json({ error: error.message });
            });
        }
      }
    });
  } catch {
    res
      .status(500)
      .json({ error: "Signing up failed, please try again later" });
  }
};
