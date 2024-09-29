import express, { NextFunction, Request, Response } from 'express';
import sequelize from './src/config/database';
import Userdetails from './src/models/Userdetails';
const CORS = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(CORS({
    origin: true,
    optionsSuccessStatus: 200 
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.post('/users', async (req, res): Promise<void> => {
//     try {
//         const { firstName, lastName, email, password } = req.body;

//         if (!firstName || !lastName || !email || !password) {
//             res.status(400).json({ message: 'Please provide all required fields' });
//             return;
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await Userdetails.create({ firstName, lastName, email, password: hashedPassword });
//         res.status(201).json(user);
//     } catch (error: any) {
//         res.status(400).json({ error: error.message });
//     }
// });


app.post('/users', async (req, res): Promise<void> => {
    try {
      const { firstName, lastName, email, password } = req.body;
  
      if (!firstName || !lastName || !email || !password) {
        res.status(400).json({ message: 'Please provide all required fields' });
        return;
      }
  
      // Check if the email already exists
      const existingUser = await Userdetails.findOne({ where: { email } });
      if (existingUser) {
        res.status(409).json({ message: 'Email already exists' });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await Userdetails.create({ firstName, lastName, email, password: hashedPassword });
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });
  


app.get('/users', async (req, res) => {
    try {
        const users = await Userdetails.findAll();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.get('/users/:id', async (req, res): Promise<void> => {
    try {
        const user = await Userdetails.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.put('/users/:id', async (req, res): Promise<void> => {
    try {
        const { firstName, lastName, email, dob, gender, contact } = req.body;
        const userId: string = req.params.id;
        const user: any = await Userdetails.findByPk(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        // const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await user.update({ firstName, lastName, email, dob, gender, contact });
        res.json(updatedUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/login', async (req, res): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await Userdetails.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token, userId: user.id });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});


const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        await Userdetails.sync({ force: false });

        app.listen(3000, () => {
            console.log('Server is running http://localhost:3000');
        });
    } catch (error: any) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
