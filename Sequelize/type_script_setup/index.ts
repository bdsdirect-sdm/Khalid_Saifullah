import express from 'express';
import sequelize from './src/config/database';
import User from './src/models/User';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const users = await User.findByPk(userId);
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.put('/users/:id', async (req, res) => {
    const { username, email, password } = req.body;
    const userId: string = req.params.id
    const user: any = await User.findByPk(userId);

    try {
        await user.update({ username, email, password });
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const userId: any = req.params.id
        const user:any = await User.findByPk(userId)
        await user.destroy(userId);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

// Sync database and start server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        await User.sync(); // Creates the User table if it doesn't exist

        app.listen(3000, () => {
            console.log('Server is running  http://localhost:3000');
        });
    } catch (error: any) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
