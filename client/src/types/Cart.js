// cart.js

export const CartItem = {
  image: '',
  slug: '',
  quantity: 0,
  countInStock: 0,
  price: 0,
  _id: '',
  name: '',
};

export const ShippingAddress = {
  fullName: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
};

export const Cart = {
  cartItems: [CartItem],
  shippingAddress: ShippingAddress,
  paymentMethod: '',
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};

export default Cart;
