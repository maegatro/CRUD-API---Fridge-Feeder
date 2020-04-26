// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sticker'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-sticker'
  },
};
