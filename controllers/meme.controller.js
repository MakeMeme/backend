const db = require("../database/database");
const AWS = require("aws-sdk");
const logger = require("../utils/pino");
const queries = require("../database/queries");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const multerS3 = require("multer-s3");

AWS.config.update({
  accessKeyId: process.env.MY_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_APP_AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "makememe",
    key: function (req, file, cb) {
      const extension = file.originalname.split(".").pop();
      const filename = `${uuidv4()}.${extension}`;
      cb(null, filename);
    },
  }),
});

const createMeme = async (req, res) => {
  logger.info(`${req.method}: ${req.originalUrl}`);
  const dbInstance = await db.getInstance();
  //   console.log(dbInstance);
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: err, error: "Image upload failed." });
    }

    const { user_id, tag } = req.body;

    try {
      const signedUrl = s3.getSignedUrl("getObject", {
        Bucket: "makememe",
        Key: req.file.key,
        expires: null,
      });

      const meme_id = uuidv4();
      const result = await dbInstance.query(queries.createMeme(), [
        meme_id,
        user_id,
        signedUrl,
        tag,
      ]);

      return res
        .status(201)
        .json({ message: "Meme uploaded successfully.", data: result.rows[0] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  });
};

const getMeme = async (req, res) => {
  logger.info(`${req.method}: ${req.originalUrl}`);
  logger.info(`${req.body}`);
  const dbInstance = await db.getInstance();

  try {
    const result = await dbInstance.query(queries.getMeme(req.body.tag));
    logger.info(result.rows);
    res.send({ data: result.rows });
  } catch (error) {
    logger.error(error);
    res.status(400).send({ data: [] });
  } finally {
    dbInstance.release();
  }
};

module.exports = {
  createMeme,
  getMeme,
};
