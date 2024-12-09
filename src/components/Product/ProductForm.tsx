import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

interface ProductFormData {
  name: string
  price: string
  stockLevel: string
}

const ProductForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: '',
    stockLevel: '',
  })

  useEffect(() => {
    if (id) {
      // TODO: Fetch product data from API
      // For now, using mock data
      setFormData({
        name: 'Product 1',
        price: '99.99',
        stockLevel: '50',
      })
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // TODO: Submit to API
      console.log('Form submitted:', formData)
      navigate('/products')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <h2>{id ? 'Edit Product' : 'Add New Product'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock Level</Form.Label>
          <Form.Control
            type="number"
            name="stockLevel"
            value={formData.stockLevel}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id ? 'Update' : 'Create'} Product
        </Button>
        <Button variant="secondary" className="ms-2" onClick={() => navigate('/products')}>
          Cancel
        </Button>
      </Form>
    </div>
  )
}

export default ProductForm
