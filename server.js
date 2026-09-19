import express from 'express';
import connectDatabase from './config/db.js';
import { check, validationResult } from 'express-validator';

// Initialize express app
const app = express();

// Connect to MongoDB
connectDatabase();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route for the root endpoint
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 * @route POST /api/data
 * @desc Register user
 */

app.post('/api/users', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Valid email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else {
        return res.send(req.body);
    }
});

// Start the server and listen on port 3000
app.listen(3000, () => console.log('Express serer running on port 3000'));
