const express = require('express');
const asyncHandler = require('express-async-handler');
const { ProductModel } = require('../models/productModel');

const productRouter = express.Router();

// /api/products
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
  })
);

productRouter.get(
  '/categories',
  asyncHandler(async (req, res) => {
    const categories = await ProductModel.find().distinct('category');
    res.json(categories);
  })
);

// /api/products/slug/tshirt
productRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product Not Found' });
    }
  })
);

module.exports = productRouter;
