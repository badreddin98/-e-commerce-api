import apiCall from './api';

export interface Product {
  id: number;
  name: string;
  price: number;
  stockLevel: number;
}

export interface ProductInput {
  name: string;
  price: number;
  stockLevel: number;
}

const productService = {
  // Get all products
  getAllProducts: () => apiCall<Product[]>('/products'),

  // Get product by ID
  getProductById: (id: number) => apiCall<Product>(`/products/${id}`),

  // Create new product
  createProduct: (product: ProductInput) =>
    apiCall<Product>('/products', 'POST', product),

  // Update product
  updateProduct: (id: number, product: ProductInput) =>
    apiCall<Product>(`/products/${id}`, 'PUT', product),

  // Delete product
  deleteProduct: (id: number) =>
    apiCall<void>(`/products/${id}`, 'DELETE'),

  // Update stock level
  updateStockLevel: (id: number, stockLevel: number) =>
    apiCall<Product>(`/products/${id}/stock`, 'PATCH', { stockLevel }),
};

export default productService;
