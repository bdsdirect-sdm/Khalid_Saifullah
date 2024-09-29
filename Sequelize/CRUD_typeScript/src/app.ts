import express, { Request, Response } from 'express';
import db from './models';

const app = express();
app.use(express.json());

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/users', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide username, email, and password' });
  }
  const user = await db.User.create({ username, email, password });
  res.status(201).json(user);
});

app.get('/users', async (req: Request, res: Response) => {
  const users = await db.User.findAll();
  res.json(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await db.User.findByPk(req.params.id);
  res.json(user);
});

app.put('/users/:id', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const userId = req.params.id;

    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({ username, email, password });

    res.json(user);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    
    res.json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
