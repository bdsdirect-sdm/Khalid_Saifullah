const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/users', async (req, res) => {
  // try {
    const { username, email, password } = req.body;
    // Validate the input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide username, email, and password' });
    }
    const user = await db.User.create({ username, email, password });
    res.status(201).json(user);
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
});



// Example route to get all users
app.get('/users', async (req, res) => {
  // try {
    const users = await db.User.findAll();
    res.json(users);
  // } catch (err) {
  //   res.status(500).send(err.message);
  // }
});

//Get only users with the given id
app.get('/users/:id', async (req, res) => {
  // try {
    const users = await db.User.findByPk(req.params.id);
    res.json(users);
  // } catch (err) {
  //   res.status(500).send(err.message);
  // }
});


//Delete route

app.put('/users/:id', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userId = req.params.id;

    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({ username, email, password });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//Delete route

app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

