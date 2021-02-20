var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _comment = require("./comment");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);


  return {
    article,
    comment,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
