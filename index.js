const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes');
const expenseRoutes = require('./routes/expense.routes');
const helmet = require('helmet');
const path= require('path');

// const CURRENT_WORKING_DIR = process.cwd()
const app = express();

//json parser
app.use(express.json());
app.use(cors('*'));
app.use(cookieParser());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

// middleware to serve static files
app.use(express.static(path.join(__dirname, './files')));

// if(process.env.NODE_SERVER === 'production') {
//     app.use(express.static(path.join(__dirname, "/client/build")));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
//     });
// }

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
    console.log(`Server started in ${process.env.NODE_SERVER} mode in port ${PORT}`);
})