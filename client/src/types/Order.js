
import { CartItem, ShippingAddress } from './cart';
import { User } from './user';

const Order = {
  _id: '',
  orderItems: [CartItem],
  shippingAddress: ShippingAddress,
  paymentMethod: '',
  user: User,
  createdAt: '',
  isPaid: false,
  paidAt: '',
  isDelivered: false,
  deliveredAt: '',
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};

export default Order;
