import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Customer Components
import CustomerList from './components/Customer/CustomerList'
import CustomerForm from './components/Customer/CustomerForm'
import CustomerDetails from './components/Customer/CustomerDetails'

// Product Components
import ProductList from './components/Product/ProductList'
import ProductForm from './components/Product/ProductForm'
import ProductDetails from './components/Product/ProductDetails'

// Order Components
import OrderForm from './components/Order/OrderForm'

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">E-commerce App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/customers">Customers</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/orders/new">New Order</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <Routes>
            {/* Customer Routes */}
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/customers/new" element={<CustomerForm />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
            <Route path="/customers/:id/edit" element={<CustomerForm />} />

            {/* Product Routes */}
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/new" element={<ProductForm />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/edit" element={<ProductForm />} />

            {/* Order Routes */}
            <Route path="/orders/new" element={<OrderForm />} />
          </Routes>
        </Container>
      </div>
    </Router>
  )
}

export default App
