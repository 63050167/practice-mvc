//Import
const Operation = require("./operation");
//Class
class Logic {
  //For random value
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
  //For show data
  showLogic = (res) => {
    new Operation().showOperation(res);
  };
  //For delete data with path_id
  deleteLogic = (res, path_id) => {
    new Operation().deleteOperation(res, path_id);
  };
  //For show data before edit
  show_updateLogic = (res, path_id) => {
    new Operation().show_updateOperation(res, path_id);
  };
  //For update data
  updateLogic = (res, model_meme) => {
    new Operation().updateOperation(res, model_meme);
  };
}
//Export
module.exports = Logic;
