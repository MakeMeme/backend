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

  getMeme: (tag) => {
    const getMemeQuery = `
    SELECT * FROM public.memes A inner join public.coordinates B on A.meme_id = B.meme_id where A.tag = '${tag}';
  `;
    return getMemeQuery;
  },
  getAllMeme: () => {
    const getAllMemeQuery = `
    SELECT * FROM memes
  `;
    return getAllMemeQuery;
  },
  createMeme: () => {
    const createMemeQuery = `INSERT INTO memes (meme_id, user_id, image_url, tag) VALUES ($1, $2, $3, $4) RETURNING *`;
    return createMemeQuery;
  },
  addCoordinates: () => {
    const addCoordinatesQuery = `INSERT INTO coordinates (meme_id,x,y) VALUES ($1, $2, $3)`;
    console.log(addCoordinatesQuery);
    return addCoordinatesQuery;
  }
};

module.exports = queries;
