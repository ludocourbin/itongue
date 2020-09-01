const client = require("./");

const dataMapper = {
  getBestUsers: async limit => {
    const query = { text: 'SELECT * FROM "users_with_more_irecords"($1)', values: [limit] };

    const results = await client.query(query, [limit]);
    return results.rows;
  },

  getBestTranslations: async limit => {
    const query = {
      text: 'SELECT * FROM "translations_with_more_irecords"($1)',
      values: [limit]
    };
    const result = await client.query(query, [limit]);
    return result.rows;
  },

  getLastiRecords: async () => {
    const query = {
      text: 'SELECT * FROM "last_irecords"'
    };
    const results = await client.query(query);
    console.log(results.rows);
    return results.rows;
  }
};

module.exports = dataMapper;
