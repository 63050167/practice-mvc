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
  updateEndpoint = (req,res)=>{
    console.log("Before : "+this.model_meme);
    this.model_meme.path_id = req.body.path_id;
    this.model_meme.path_file = req.body.path_file
    this.model_meme.reach = req.body.reach
    this.model_meme.likes = req.body.likes
    this.model_meme.share = req.body.share
    this.model_meme.comment = req.body.engagement
    this.model_meme.viral = req.body.viral
    console.log("After : "+this.model_meme);
    new Logic().updateLogic(res, this.model_meme);

  }
}
module.exports = Endpoint;
