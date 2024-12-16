const express = require('express'); // Import express
const cors = require('cors'); // Import cors
const connectDB = require('./config/db'); // Import connectDB
const { port } = require('./config/config'); // Import port
const errorHandler = require('./middleware/errorHandler'); // Import errorHandler

const app = express(); // Initialize express

// Middleware to parse incoming requests
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
connectDB();

// Routes
const teaRoutes = require('./routes/teaRoutes');
app.use('/api/teas', teaRoutes);

// Error Handler (should be last)
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));