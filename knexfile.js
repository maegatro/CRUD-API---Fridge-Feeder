// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/fridgemanager'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-sticker'
  },
};
