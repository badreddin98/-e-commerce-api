# E-commerce API Frontend

A modern React-based frontend application for managing an e-commerce platform. This project was built using Vite, React, TypeScript, and React Bootstrap.

## Features

### Customer Management
- View list of customers with filtering and sorting
- Create new customers with validation
- View detailed customer information
- Update customer details
- Delete customers with confirmation

### Product Management
- Browse product catalog with search and filters
- Add new products with details
- View product information and stock levels
- Update product details and pricing
- Delete products with confirmation
- Stock level management and alerts

### Order Processing
- Place new orders with multiple items
- Select customers and products dynamically
- Calculate order totals automatically
- View order history (Bonus)
- Cancel pending orders (Bonus)

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: React Bootstrap
- **Routing**: React Router v6
- **State Management**: React Hooks (useState, useEffect)
- **Form Handling**: Controlled components with validation
- **API Integration**: Fetch API with async/await

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone [your-repository-url]
   cd ecommerce-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
  components/
    Customer/           # Customer management components
      CustomerList.tsx
      CustomerForm.tsx
      CustomerDetails.tsx
    Product/           # Product management components
      ProductList.tsx
      ProductForm.tsx
      ProductDetails.tsx
    Order/             # Order processing components
      OrderForm.tsx
  App.tsx             # Main application component
  main.tsx           # Application entry point
```

## Features Implementation

### Customer Management
- CRUD operations for customer data
- Form validation for customer information
- Confirmation dialogs for deletions

### Product Management
- Complete product catalog management
- Stock level monitoring
- Product details with pricing

### Order Processing
- Dynamic order creation
- Real-time total calculation
- Customer and product selection

## Backend API Integration

This frontend application connects to the Module 6 Mini-Project backend API. The backend repository can be found here:
[Link to Backend Repository](#) <!-- TODO: Add your Module 6 backend repository link -->

## Error Handling

- Form validation with user feedback
- API error handling with user-friendly messages
- Loading states for async operations

## Responsive Design

- Mobile-first approach
- Responsive layout using Bootstrap Grid
- Optimized for various screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
