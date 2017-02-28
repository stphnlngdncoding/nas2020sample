const mongoose = require('mongoose');
const db = mongoose.connection;

const reportSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  author: String
})

const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;