import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Userdetails extends Model {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public dob!: string;
    public gender!: string;
    public contact!: string;
    public id!: number; 
}

Userdetails.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
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
        dob: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Userdetails',
    }
);

export default Userdetails;
