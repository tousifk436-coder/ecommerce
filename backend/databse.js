const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tousifk436_db_user:Tousif123@cluster.414fpqv.mongodb.net/product"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = connectToDatabase;