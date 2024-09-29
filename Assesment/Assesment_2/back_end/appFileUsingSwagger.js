const express = require('express');
const app = express();
const db = require('./models');
const CORS = require('cors');
const bcrypt = require('bcrypt');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration


app.use(express.json());
app.use(CORS({
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}));

// Define routes
/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: Hello World!
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               dob:
 *                 type: string
 *               gender:
 *                 type: string
 *               contact:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Please provide all required fields
 *       500:
 *         description: Internal server error
 */
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password, dob, gender, contact } = req.body;
    // Validate the input
    if (!firstName || !lastName || !email || !password || !dob || !gender || !contact) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.Userdetails.create({ firstName, lastName, email, password: hashedPassword, dob, gender, contact });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Internal server error
 */
app.get('/users', async (req, res) => {
  try {
    const users = await db.Userdetails.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
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

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               dob:
 *                 type: string
 *               gender:
 *                 type: string
 *               contact:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
app.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await db.Userdetails.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete user
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
// Uncomment to enable delete functionality
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
