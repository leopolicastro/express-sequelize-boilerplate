if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./server/app'),
  { sequelize } = require('./server/db/models'),
  port = process.env.PORT || 8080;

// Sync database and spin up server
sequelize.sync().then(async () => {
  app.listen(port, () =>
    console.info(`Express router listening on port ${port}!`)
  );
});
