const { modelOptions, prop, getModelForClass } = require('@typegoose/typegoose');

class Product {
  constructor() {
    this._id = undefined;
  }

  @prop({ required: true })
  name;

  @prop({ required: true, unique: true })
  slug;

  @prop({ required: true })
  image;

  @prop({ required: true })
  brand;

  @prop({ required: true })
  category;

  @prop({ required: true })
  description;

  @prop({ required: true, default: 0 })
  price;

  @prop({ required: true, default: 0 })
  countInStock;

  @prop({ required: true, default: 0 })
  rating;

  @prop({ required: true, default: 0 })
  numReviews;
}

const ProductModel = getModelForClass(Product);

module.exports = { ProductModel, Product };
