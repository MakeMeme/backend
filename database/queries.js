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
};

module.exports = queries;
