const express = require('express');
const app = express();
const db = require('./models');
const CORS = require('cors');
const bcrypt = require('bcrypt');
const { where } = require('sequelize');

app.use(express.json());
app.use(CORS({
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}))
// Define routes
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// Create user

app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password, dob, gender, contact } = req.body;

    // Validate the input
    if (!firstName || !lastName || !email || !password || !dob || !gender || !contact) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(req.body.password)
    const user = await db.Userdetails.create({ firstName, lastName, email, password: hashedPassword, dob, gender, contact });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await db.Userdetails.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await db.Userdetails.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update user
app.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await db.Userdetails.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { firstName, lastName, email, password, dob, gender, contact } = req.body;

    hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await user.update({ firstName, lastName, email, password: hashedPassword, dob, gender, contact });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// login user

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await db.Userdetails.findOne({ where: { email: email } })
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Login successful'});

    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// Delete user
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const user = await db.Userdetails.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     await user.destroy();
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
