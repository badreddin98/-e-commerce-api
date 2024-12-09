import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  price: number
  stockLevel: number
}

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    // TODO: Fetch product from API
    // For now, using mock data
    setProduct({
      id: Number(id),
      name: 'Product 1',
      price: 99.99,
      stockLevel: 50,
    })
  }, [id])

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        // TODO: Delete product via API
        navigate('/products')
      } catch (error) {
        console.error('Error deleting product:', error)
      }
    }
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Product Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${product.price.toFixed(2)}<br />
            <strong>Stock Level:</strong> {product.stockLevel} units
          </Card.Text>
          <Link to={`/products/${id}/edit`} className="btn btn-warning me-2">
            Edit
          </Link>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Link to="/products" className="btn btn-secondary ms-2">
            Back to List
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetails
