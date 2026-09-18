import express from 'express';
import connectDatabase from './config/db.js';

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

app.post('/api/data', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// Start the server and listen on port 3000
app.listen(3000, () => console.log('Express serer running on port 3000'));
