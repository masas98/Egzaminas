const express = require("express");
const SallonController = require("../controllers/SallonController");

const SallonRouter = express.Router();

SallonRouter.route("/")
  .get(SallonController.getSallons)
  .post(SallonController.postSallon);

SallonRouter.route("/:id")
  .get(SallonController.getSallonByID)
  .patch(SallonController.updateSallon)
  .delete(SallonController.deleteSallon);

module.exports = SallonRouter;
