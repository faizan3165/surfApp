import cloudinary from "cloudinary";

const cloudConnection = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_KEY,
      api_secret: process.env.CLOUD_SECRET,
    });

    console.log("");
    console.log("====================================");
    console.log("Connected to cloudinary");
    console.log("====================================");
    console.log("");
  } catch (e) {
    console.log("");
    console.log("====================================");
    console.log(e.message);
    console.log("====================================");
    console.log("");

    process.exit(1);
  }
};

export default cloudConnection;
