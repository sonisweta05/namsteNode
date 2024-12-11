const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sweta:51mmmciHhEflXr61@namstenode.zzm5g.mongodb.net/devTinder"
  );
};

module.exports  = connectDB
  