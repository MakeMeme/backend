const queries = {
  checkDbInstance: () => {
    const checkDbInstanceQuery = `
        SELECT * FROM public.test
        ORDER BY "values" ASC 
        `;
    return checkDbInstanceQuery;
  },
  
  checkUsersTable: () => {
    const checkUsersTableQuery = `
        SELECT * FROM users
        `;
    return checkUsersTableQuery;
  },

  checkMemesTable: () => {
    const checkMemesTableQuery = `
    SELECT * FROM memes A inner join coordinates B on A.meme_id = B.meme_id;
  `;
    return checkMemesTableQuery;
  },
  createMeme: () => {
    const createMemeQuery = `INSERT INTO memes (meme_id, user_id, image_url, tag) VALUES ($1, $2, $3, $4) RETURNING *`;
    return createMemeQuery;
  },
};

module.exports = queries;
