import { Sequelize, DataTypes, Dialect } from 'sequelize';
import config from '../config/config.json';

// Define the type for your configuration
interface Config {
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect; // Specify that dialect is of type Dialect
  };
}

// Cast the imported config to the Config type
const typedConfig = config as Config;

// Get the environment and corresponding configuration
const env: keyof Config = (process.env.NODE_ENV as keyof Config) || 'development';
const configEnv = typedConfig[env];

// Create a new Sequelize instance
const sequelize = new Sequelize(
  configEnv.database,
  configEnv.username,
  configEnv.password,
  {
    host: configEnv.host,
    dialect: configEnv.dialect, // This should now be of type Dialect
  }
);

// Initialize the database object
const db: { Sequelize: typeof Sequelize; sequelize: Sequelize; User: any } = {
  Sequelize,
  sequelize,
  User: require('./user')(sequelize, DataTypes), // Import User model
};

// Sync the database and log the connection
db.sequelize.sync()
  .then(() => {
    console.log('Database Connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

export default db;
