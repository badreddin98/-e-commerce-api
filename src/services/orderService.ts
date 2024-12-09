import apiCall from './api';

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  customerId: number;
  items: OrderItem[];
  total: number;
  orderDate: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface OrderInput {
  customerId: number;
  items: OrderItem[];
}

const orderService = {
  // Get all orders
  getAllOrders: () => apiCall<Order[]>('/orders'),

  // Get order by ID
  getOrderById: (id: number) => apiCall<Order>(`/orders/${id}`),

  // Get customer orders
  getCustomerOrders: (customerId: number) =>
    apiCall<Order[]>(`/customers/${customerId}/orders`),

  // Create new order
  createOrder: (order: OrderInput) =>
    apiCall<Order>('/orders', 'POST', order),

  // Update order status
  updateOrderStatus: (id: number, status: Order['status']) =>
    apiCall<Order>(`/orders/${id}/status`, 'PATCH', { status }),

  // Cancel order
  cancelOrder: (id: number) =>
    apiCall<Order>(`/orders/${id}/cancel`, 'PATCH'),
};

export default orderService;
