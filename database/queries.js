const queries = {
  checkDbInstance: () => {
    const checkDbInstanceQuery = `
        SELECT * FROM public.test
        ORDER BY "values" ASC 
        `;
    return checkDbInstanceQuery;
  },
};

module.exports = queries;
