const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { keyRouter } = require('./routers/keyRouter');
const { orderRouter } = require('./routers/orderRouter');
const { productRouter } = require('./routers/productRouter');
const { seedRouter } = require('./routers/seedRouter');
const { userRouter } = require('./routers/userRouter');

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/tsmernamazonadb';
mongoose.set('strictQuery', true);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch(() => {
    console.log('error mongodb');
  });

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/seed', seedRouter);
app.use('/api/keys', keyRouter);

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
);

const PORT = parseInt((process.env.PORT || '4000'), 10);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
