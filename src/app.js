const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is working' });
});

app.use('/api/users', userRouter);

module.exports = app;
