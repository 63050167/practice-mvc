const { model_meme } = require("../models/model");
const Operation = require("./operation");

class Logic {
  addLogic = (res, model_meme) => {
    model_meme.reach = Math.floor(1 + Math.random() * 120000);
    model_meme.likes = Math.floor(1 + Math.random() * model_meme.reach);
    model_meme.share = Math.floor(1 + Math.random() * model_meme.reach);
    model_meme.comment = Math.floor(1 + Math.random() * model_meme.reach);

    model_meme.engagement =
      (model_meme.likes + model_meme.share + model_meme.comment) /
      model_meme.reach;

    if (model_meme.engagement < 0.1) {
      model_meme.viral = "Not Viral";
    } else {
      model_meme.viral = "Is Viral";
    }
    new Operation().addOperation(res, model_meme);
  };
  showLogic = (res) => {
    new Operation().showOperation(res);
  };
  deleteLogic = (res, path_id) => {
    new Operation().deleteOperation(res, path_id);
  };
  show_updateLogic = (res, path_id) => {
    new Operation().show_updateOperation(res, path_id);
  };
  updateLogic = (res,model_meme) =>{
    console.log("logic");
    new Operation().updateOperation(res,model_meme)
  }
}
module.exports = Logic;
