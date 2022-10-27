//Import
const models = require("../models/model");
const Logic = require("./logic");
//Class 
class Endpoint {
  //Constructor for 
  constructor() {
    this.model_meme = models.model_meme;
  }
  //For add data and new Logic
  addEndpoint = (req, res) => {
    this.model_meme.path_file = req.body.path_file;
    new Logic().addLogic(res, this.model_meme);
  };
  //For show data and new Logic
  showEndpoint = (req, res) => {
    new Logic().showLogic(res);
  };
  //For delete data, get id for delete and new Logic
  deleteEndpoint = (req, res) => {
    var path_id = req.params.path_id;
    new Logic().deleteLogic(res, path_id);
  };
  //For show data before edit , get id for show edit and new Logic 
  show_updateEndpoint = (req, res) => {
    var path_id = req.params.path_id;
    new Logic().show_updateLogic(res,path_id);
  };
  //For update data and set model form body parser
  updateEndpoint = (req,res)=>{
    console.log("Before : "+this.model_meme);
    this.model_meme.path_id = req.params.path_id;
    this.model_meme.path_file = req.body.path_file
    this.model_meme.reach = req.body.reach
    this.model_meme.likes = req.body.likes
    this.model_meme.share = req.body.share
    this.model_meme.comment = req.body.comment
    this.model_meme.engagement = req.body.engagement
    this.model_meme.viral = req.body.viral
    console.log("After : "+this.model_meme);
    new Logic().updateLogic(res, this.model_meme);

  }
}
module.exports = Endpoint;
