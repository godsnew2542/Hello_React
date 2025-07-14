### Add tsconfig 
- npx --init Or npx tsc --init

```
tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true
  }
}
```

## Node v22.11.0

## Homework 1
### Exercise 1: Array Loops and Processing
#### Scenario: You have an array of employee data and need to process it using different loop methods.

```javascript
const employees = [
    { name: "Alice", department: "Engineering", salary: 75000, yearsOfService: 3 },
    { name: "Bob", department: "Marketing", salary: 65000, yearsOfService: 5 },
    { name: "Charlie", department: "Engineering", salary: 80000, yearsOfService: 2 },
    { name: "Diana", department: "Sales", salary: 70000, yearsOfService: 4 },
    { name: "Eve", department: "Engineering", salary: 85000, yearsOfService: 6 }
];
```

Tasks:
> Use a for loop to find the total salary of all employees

> Use forEach to print each employee's name and department

> Use filter to get all Engineering department employees

> Use map to create a new array with just names and salaries

> Use find to locate the employee with the highest salary

> Use reduce to calculate the average years of service

### Exercise 2: Convert JavaScript to TypeScript
#### Convert this JavaScript code to TypeScript with proper interfaces:

```javascript
function processOrder(customer, items, shippingAddress) {
    let totalAmount = 0;
    
    for (let item of items) {
        totalAmount += item.price * item.quantity;
    }
    
    const order = {
        id: generateOrderId(),
        customer: customer,
        items: items,
        shippingAddress: shippingAddress,
        totalAmount: totalAmount,
        status: "pending",
        createdAt: new Date()
    };
    
    return order;
}

function generateOrderId() {
    return Math.random().toString(36).substring(2, 15);
}

// Example usage:
const customer = {
    id: 123,
    name: "John Doe",
    email: "john@example.com"
};

const items = [
    { productId: "abc", name: "Laptop", price: 999.99, quantity: 1 },
    { productId: "def", name: "Mouse", price: 29.99, quantity: 2 }
];

const address = {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
    country: "USA"
};

const newOrder = processOrder(customer, items, address);
```

Requirements:
> Create interfaces for Customer, OrderItem, ShippingAddress, and Order

> Add proper type annotations to all function parameters and return types

> Use union types for the order status (it can be "pending", "processing", "shipped", "delivered")

> Make email optional in the Customer interface

> Ensure the code compiles without errors

### Exercise 3: Error Handling and Type Guards
#### Scenario: You're building a user registration system that needs robust validation and error handling.

```javascript
function registerUser(userData) {
    // Validate required fields
    // Handle different types of errors
    // Return success or failure response
}

// Test with different inputs:
registerUser({ name: "Alice", email: "alice@example.com", age: 25 });
registerUser({ name: "Bob" }); // Missing email
registerUser({ name: "", email: "invalid-email", age: -5 }); // Invalid data
registerUser(null); // Invalid input
```

Your Tasks:
> Create interfaces for UserInput, ValidationError, and RegistrationResult

> Implement the registerUser function with proper TypeScript types

> Add validation logic that checks:
- All required fields are present (name, email, age)
- Name is not empty
- Email contains "@" symbol
- Age is between 13 and 120

> Use try-catch blocks to handle different error scenarios

> Return a result object that indicates success/failure with appropriate data
> Use type guards to check if the input is valid before processing

##### Bonus Challenge: Create a union type for the function return value that can be either a success result (with user data) or an error result (with error details).
##### Expected Return Types:
```
Success: { success: true, user: RegisteredUser }
Error: { success: false, errors: ValidationError[] }
```