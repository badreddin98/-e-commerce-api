import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  price: number
  stockLevel?: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // TODO: Fetch products from API
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 99.99, stockLevel: 50 },
      { id: 2, name: 'Product 2', price: 149.99, stockLevel: 30 },
    ]
    setProducts(mockProducts)
  }, [])

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      // TODO: Delete product via API
      setProducts(products.filter(product => product.id !== id))
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>
        <Link to="/products/new" className="btn btn-primary">Add New Product</Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stockLevel}</td>
              <td>
                <Link to={`/products/${product.id}`} className="btn btn-info btn-sm me-2">View</Link>
                <Link to={`/products/${product.id}/edit`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductList
