const express = require('express');
const asyncHandler = require('express-async-handler');
const { sampleProducts, sampleUsers } = require('../data');
const { ProductModel } = require('../models/productModel');
const { UserModel } = require('../models/userModel');

const seedRouter = express.Router();

seedRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({});
    const createdProducts = await ProductModel.insertMany(sampleProducts);

    await UserModel.deleteMany({});
    const createdUsers = await UserModel.insertMany(sampleUsers);

    res.json({ createdProducts, createdUsers });
  })
);

module.exports = seedRouter;
