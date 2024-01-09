const { modelOptions, prop, getModelForClass, Ref } = require('@typegoose/typegoose');
const { Product } = require('./productModel');
const { User } = require('./userModel');

class ShippingAddress {
  @prop()
  fullName;
  @prop()
  address;
  @prop()
  city;
  @prop()
  postalCode;
  @prop()
  country;
  @prop()
  lat;
  @prop()
  lng;
}

class Item {
  @prop({ required: true })
  name;
  @prop({ required: true })
  quantity;
  @prop({ required: true })
  image;
  @prop({ required: true })
  price;
  @prop({ ref: Product })
  product;
}

class PaymentResult {
  @prop()
  paymentId;
  @prop()
  status;
  @prop()
  update_time;
  @prop()
  email_address;
}

@modelOptions({ schemaOptions: { timestamps: true } })
class Order {
  _id;
  @prop()
  orderItems;
  @prop()
  shippingAddress;
  @prop({ ref: User })
  user;
  @prop({ required: true })
  paymentMethod;
  @prop()
  paymentResult;
  @prop({ required: true, default: 0 })
  itemsPrice;
  @prop({ required: true, default: 0 })
  shippingPrice;
  @prop({ required: true, default: 0 })
  taxPrice;
  @prop({ required: true, default: 0 })
  totalPrice;
  @prop({ required: true, default: false })
  isPaid;
  @prop()
  paidAt;
  @prop({ required: true, default: false })
  isDelivered;
  @prop()
  deliveredAt;
}

const OrderModel = getModelForClass(Order);

module.exports = { OrderModel, Order, Item, PaymentResult, ShippingAddress };
