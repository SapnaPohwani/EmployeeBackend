const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description:{type: String, required: true},
  
}, { timestamps: true });

module.exports = mongoose.model("Designation", designationSchema);
