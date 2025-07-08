export interface Customer {
    id: number,
    name: string,
    email: string,
}

export interface Item {
    productId: string,
    name: string,
    price: number,
    quantity: number,
}

export interface Address {
    street: string,
    city: string,
    zipCode: string,
    country: string,
}

interface Order {
    id: string,
    customer: Customer,
    items: Item[],
    shippingAddress: Address,
    totalAmount: number,
    status: string,
    createdAt: Date,
}

export function processOrder(customer: Customer, items: Item[], shippingAddress: Address): Order {
    let totalAmount: number = 0;

    for (let item of items) {
        totalAmount += item.price * item.quantity;
    }

    const order: Order = {
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

function generateOrderId(): string {
    return Math.random().toString(36).substring(2, 15);
}
