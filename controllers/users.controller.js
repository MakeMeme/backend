const db = require("../database/database");
const logger = require("../utils/pino");
const queries = require("../database/queries");

const getUsers = async (req, res) => {
    logger.info(`${req.method}: ${req.originalUrl}`);
    const dbInstance = await db.getInstance();
  
    try {
      const result = await dbInstance.query(queries.checkUsersTable());
      logger.info(result.rows);
      res.send({ data: result.rows });
    } catch (error) {
      logger.error(error);
      res.status(400).send({ data: [] });
    } finally {
      dbInstance.release();
    }
  };

module.exports = {getUsers}