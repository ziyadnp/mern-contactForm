const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const baseURL = "/api/form"; 

/**
 * Instnatiate express module
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

/**
 * Connect to DB
 */
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

/**
 * User schema for Record
 */ 
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String
  }
);

const user = new mongoose.model("User", userSchema);

/**
 * Read all the Entries, Method GET
 */
app.get(baseURL, async (req, res, next) => {
  const forms = await user.find().sort({ createdAt: -1 });

  let msg = "Forms fetched successfully";
  return res.json({ success: true, message: msg, data: forms });
});


/**
 * Create a new form data, Method POST
 */
app.post(baseURL, async (req, res)=>{
  const {name,email,subject, message} = req.body;

  // All fields mandatory
  if(!name || !email || !subject || !message){
    return res.status(400).json({
      success: false,
      error: "Please fill all fields"
    });
  }

  // Data submitted after validation
  const form = await user.create({name,email,subject,message});
  let msg = "Data submitted successfully";
  return res.json({ success: true, message: msg, data: form });
  
});

/**
 * Delete form request, method POST 
 */
app.delete(baseURL, async (req, res) => {

 // const uid=123;
  const { uid } = req.query;

  // check correct id is passed
  if(!uid){
    return res.status(400).json({
      success: false,
      error: "Please pass a valid id",
    });
  }
  
  // Delete form from database
   const entry = await user.findByIdAndDelete(uid);

  // console.log(entry);

  // Check form get deleted
  if (!entry) {
    return res.status(404).json({
      success: false,
      error: "Entry not found",
    });
  }

  let msg = "Form deleted successfully";
  return res.json({ success: true, message: msg });

});

app.listen(process.env.PORT, ()=>{
    console.log( "Server Started");
});
