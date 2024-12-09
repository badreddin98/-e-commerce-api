import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Customer {
  id: number
  name: string
  email: string
  phone: string
}

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    // TODO: Fetch customers from API
    const mockCustomers: Customer[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    ]
    setCustomers(mockCustomers)
  }, [])

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      // TODO: Delete customer via API
      setCustomers(customers.filter(customer => customer.id !== id))
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customers</h2>
        <Link to="/customers/new" className="btn btn-primary">Add New Customer</Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <Link to={`/customers/${customer.id}`} className="btn btn-info btn-sm me-2">View</Link>
                <Link to={`/customers/${customer.id}/edit`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(customer.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CustomerList
