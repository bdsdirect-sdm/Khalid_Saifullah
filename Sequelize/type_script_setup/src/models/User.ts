import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
  public username!: string;
  public email!: string;
  public password!: string;

}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
