import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'

interface Customer {
  id: number
  name: string
  email: string
  phone: string
}

const CustomerDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [customer, setCustomer] = useState<Customer | null>(null)

  useEffect(() => {
    // TODO: Fetch customer from API
    // For now, using mock data
    setCustomer({
      id: Number(id),
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    })
  }, [id])

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        // TODO: Delete customer via API
        navigate('/customers')
      } catch (error) {
        console.error('Error deleting customer:', error)
      }
    }
  }

  if (!customer) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>{customer.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {customer.email}<br />
            <strong>Phone:</strong> {customer.phone}
          </Card.Text>
          <Link to={`/customers/${id}/edit`} className="btn btn-warning me-2">
            Edit
          </Link>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Link to="/customers" className="btn btn-secondary ms-2">
            Back to List
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CustomerDetails
