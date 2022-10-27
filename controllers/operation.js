//Import
const connection = require("../database/connection");
//Class
class Operation {
  //Set SQL for add data and redirect to home page
  addOperation = (res, model_meme) => {
    let sql = `INSERT INTO my_post
            (   
                path_file, 
                reach,
                likes,
                share,
                comment, 
                engagement,
                viral
            )
            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?
            )`;
    connection.query(
      sql,
      [
        model_meme.path_file,
        model_meme.reach,
        model_meme.likes,
        model_meme.share,
        model_meme.comment,
        model_meme.engagement,
        model_meme.viral,
      ],
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          return res.status(201).redirect("/");
        }
      }
    );
  };
  //Set SQL for show all data and render table page
  showOperation = (res) => {
    let sql = `SELECT * FROM my_post`;
    connection.query(sql, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return res
          .status(201)
          .render("../views/show_table.ejs", { response: data });
      }
    });
  };
  //Set SQL for delete data with path_id and redirect to table page
  deleteOperation = (res, path_id) => {
    let sql = `DELETE FROM my_post WHERE path_id = ?`;
    connection.query(sql, [path_id], function (err) {
      if (err) {
        console.log(err);
      } else {
        return res.status(201).redirect("/show_table");
      }
    });
  };
  //Set SQL for show data with path_id before edit
  show_updateOperation = (res, path_id) => {
    let sql = `SELECT * FROM my_post WHERE path_id = ?`;
    connection.query(sql, [path_id], function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return res
          .status(201)
          .render("../views/edit.ejs", { response: data[0] });
      }
    });
  };
  //Set SQL for update data after edit and redirect to table page
  updateOperation = (res, model_meme) => {
    let sql = `UPDATE my_post SET path_file = ?, reach = ?, likes = ?,share = ?, comment = ?,engagement = ?, viral = ?
        WHERE path_id = ?`;
    connection.query(
      sql,
      [
        model_meme.path_file,
        model_meme.reach,
        model_meme.likes,
        model_meme.share,
        model_meme.comment,
        model_meme.engagement,
        model_meme.viral,
        model_meme.path_id,
      ],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(model_meme);
          return res.status(201).redirect("/show_table");
        }
      }
    );
  };
}
//Export
module.exports = Operation;
