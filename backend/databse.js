const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/ecommerceweb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.10"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = connectToDatabase;