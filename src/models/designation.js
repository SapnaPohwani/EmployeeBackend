const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description:{type: String, required: true},
  
}, { timestamps: true });

module.exports = mongoose.model("Designation", designationSchema);
