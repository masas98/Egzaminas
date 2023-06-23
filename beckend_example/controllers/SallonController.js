const Sallon = require("../models/SallonModel");
exports.getSallons = (req, res) => {
  // console.log(req.query);
  Sallon.find(req.query)
    .then((doc) => {
      //console.log(req.query);
      res.status(200).json(doc);
    })
    .catch((err) => res.status(404).json(err));
};

exports.postSallon = (req, res) => {
  Sallon.create(req.body)
    .then((doc) => {
      // console.log(doc);
      res.status(201).json(doc);
    })
    .catch((err) => res.status(404).json(err));
};

exports.getSallonByID = (req, res) => {
  // console.log(req.params);
  let { id } = req.params;
  Sallon.findById(id)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => res.status(404).json(err));
};

exports.deleteSallon = (req, res) => {
  let { id } = req.params;
  Sallon.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => res.status(404).json(err));
};

exports.updateSallon = (req, res) => {
  let { id } = req.params;
  // query option {new: true} reikalingas, kad vartotojui būtų grąžintas atnaujintas dokumentas t.y. book ir runValidators:true, kad atnaujinanat būtų validuojama pagal schemą

  Sallon.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => res.status(404).json(err));
};
