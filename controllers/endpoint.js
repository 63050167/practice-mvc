const models = require("../models/model");
const Logic = require("./logic");
class Endpoint {
  constructor() {
    this.model_meme = models.model_meme;
  }
  addEndpoint = (req, res) => {
    this.model_meme.path_file = req.body.path_file;
    new Logic().addLogic(res, this.model_meme);
  };
  showEndpoint = (req, res) => {
    new Logic().showLogic(res);
  };
  deleteEndpoint = (req, res) => {
    var path_id = req.params.path_id;
    new Logic().deleteLogic(res, path_id);
  };
  show_updateEndpoint = (req, res) => {
    var path_id = req.params.path_id;
    new Logic().show_updateLogic(res,path_id);
  };
}
module.exports = Endpoint;
