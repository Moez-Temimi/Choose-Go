const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();
//CLD Config
cloudinary.config({
  cloud_name: "dtwuychif",
  api_key: 156134314836426,
  api_secret: "oLF8kqJFdyjII-YZzpE0bydWp-g",
});
//Uploqding img to CLD
sendToCloudinary = (path, data) => {
  return cloudinary.uploader
    .upload(path, {
      data,
    })
    .then((data) => {
      return { url: data.url, public: data.public_id };
    })
    .catch((error) => {
      console.log(error);
    });
};
//  delete img from the CLD
removeFromCloudinary = async (public_id) => {
  await cloudinary.uploader.destroy(public_id, function (error, result) {
    console.log("result API--->", result);
    console.log("err--->api", error);
  });
};
//update img
updateImg = async (url) => {
  cloudinary.uploader.explicit(
    url,
    { type: "fetch"},
    function (err, result) {
      console.log("uperr---->", result);
      console.log("uperr---->", err);
    }
  );
};
module.exports = { sendToCloudinary, removeFromCloudinary,updateImg };
