const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];

const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Userdetails = require('./user')(sequelize, DataTypes);

module.exports = db;

// Sync the database
db.sequelize.sync({force:false})
  .then(() => {
    console.log('Database Connected');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
