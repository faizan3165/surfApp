import mongoose from "mongoose";

const connection = () => {
  try {
    mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("====================================");
    console.log(`MongoDB Connected`);
    console.log("====================================");
  } catch (err) {
    console.log("====================================");
    console.error(err.message);
    console.log("====================================");
    process.exit(1);
  }
};

export default connection;
