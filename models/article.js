const mongoose = require("mongoose");
require('mongoose-type-url');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  url: { type: mongoose.SchemaTypes.Url}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;