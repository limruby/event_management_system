const utils = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

var storage = new GridFsStorage({
    url: process.env.ATLAS_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      const match = ["image/png", "image/jpeg"];
  
      if (match.indexOf(file.mimetype) === -1) {
        const filename = `${Date.now()}-bezkoder-${file.originalname}`;
        return filename;
      }
  
      return {
        bucketName: "photos",
        filename: `${Date.now()}-bezkoder-${file.originalname}`
      };
    }
  });
  
  var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
  var uploadFilesMiddleware = utils.promisify(uploadFiles);
  module.exports = uploadFilesMiddleware;