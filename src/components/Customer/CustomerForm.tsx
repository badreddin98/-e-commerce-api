import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

interface CustomerFormData {
  name: string
  email: string
  phone: string
}

const CustomerForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState<CustomerFormData>({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    if (id) {
      // TODO: Fetch customer data from API
      // For now, using mock data
      setFormData({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
      })
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // TODO: Submit to API
      console.log('Form submitted:', formData)
      navigate('/customers')
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
      <h2>{id ? 'Edit Customer' : 'Add New Customer'}</h2>
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id ? 'Update' : 'Create'} Customer
        </Button>
        <Button variant="secondary" className="ms-2" onClick={() => navigate('/customers')}>
          Cancel
        </Button>
      </Form>
    </div>
  )
}

export default CustomerForm
