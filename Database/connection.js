const mongoose = require("mongoose");

const connectWithDb = () => {
  // Mongodb connection establish
  mongoose.connect(
    "mongodb+srv://topnotch:topnotch123@topnotchcluster.mlhs5.mongodb.net/topnotch?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (!error) {
        console.log("Mongodb Connection success");
      } else {
        console.log("Mongodb Connection Failed", error);
      }
    }
  );
};

module.exports = { connectWithDb };
