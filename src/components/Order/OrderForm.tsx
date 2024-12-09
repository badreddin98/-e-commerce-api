import { useState, useEffect } from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface Customer {
  id: number
  name: string
}

interface Product {
  id: number
  name: string
  price: number
  stockLevel: number
}

interface OrderItem {
  productId: number
  quantity: number
  price: number
}

const OrderForm = () => {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState<Customer[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<string>('')
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])

  useEffect(() => {
    // TODO: Fetch customers and products from API
    // For now, using mock data
    setCustomers([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ])

    setProducts([
      { id: 1, name: 'Product 1', price: 99.99, stockLevel: 50 },
      { id: 2, name: 'Product 2', price: 149.99, stockLevel: 30 },
    ])
  }, [])

  const handleAddItem = () => {
    setOrderItems([...orderItems, { productId: 0, quantity: 1, price: 0 }])
  }

  const handleItemChange = (index: number, field: keyof OrderItem, value: string) => {
    const newItems = [...orderItems]
    if (field === 'productId') {
      const product = products.find(p => p.id === Number(value))
      newItems[index] = {
        ...newItems[index],
        productId: Number(value),
        price: product?.price || 0,
      }
    } else if (field === 'quantity') {
      newItems[index] = {
        ...newItems[index],
        quantity: Number(value),
      }
    }
    setOrderItems(newItems)
  }

  const handleRemoveItem = (index: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== index))
  }

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId)
      return total + (product?.price || 0) * item.quantity
    }, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const orderData = {
        customerId: Number(selectedCustomer),
        items: orderItems,
        total: calculateTotal(),
        orderDate: new Date().toISOString(),
      }
      // TODO: Submit order to API
      console.log('Order submitted:', orderData)
      navigate('/')
    } catch (error) {
      console.error('Error submitting order:', error)
    }
  }

  return (
    <div>
      <h2>Place New Order</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Customer</Form.Label>
          <Form.Select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            required
          >
            <option value="">Select Customer</option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4>Order Items</h4>
            <Button variant="success" onClick={handleAddItem}>
              Add Item
            </Button>
          </div>

          <Table striped bordered>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Form.Select
                      value={item.productId}
                      onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
                      required
                    >
                      <option value="">Select Product</option>
                      {products.map(product => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                      required
                    />
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-end"><strong>Total:</strong></td>
                <td colSpan={2}><strong>${calculateTotal().toFixed(2)}</strong></td>
              </tr>
            </tfoot>
          </Table>
        </div>

        <Button variant="primary" type="submit" disabled={!selectedCustomer || orderItems.length === 0}>
          Place Order
        </Button>
        <Button variant="secondary" className="ms-2" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Form>
    </div>
  )
}

export default OrderForm
