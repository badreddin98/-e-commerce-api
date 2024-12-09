import apiCall from './api';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface CustomerInput {
  name: string;
  email: string;
  phone: string;
}

const customerService = {
  // Get all customers
  getAllCustomers: () => apiCall<Customer[]>('/customers'),

  // Get customer by ID
  getCustomerById: (id: number) => apiCall<Customer>(`/customers/${id}`),

  // Create new customer
  createCustomer: (customer: CustomerInput) => 
    apiCall<Customer>('/customers', 'POST', customer),

  // Update customer
  updateCustomer: (id: number, customer: CustomerInput) =>
    apiCall<Customer>(`/customers/${id}`, 'PUT', customer),

  // Delete customer
  deleteCustomer: (id: number) =>
    apiCall<void>(`/customers/${id}`, 'DELETE'),
};

export default customerService;
