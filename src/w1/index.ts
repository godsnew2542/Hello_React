import { forLoopSalary, forLoopDepartment, filterResult, mapNewResult, findMaxSalary, avgYearsOfService } from "./Exercise1"
import { Customer, Item, Address, processOrder } from "./Exercise2"
import { UserInput, registerUser } from "./Exercise3"

export interface Employees {
    name: String,
    department: String,
    salary: number,
    yearsOfService: number,
}

const employees: Employees[] = [
    { name: "Alice", department: "Engineering", salary: 75000, yearsOfService: 3 },
    { name: "Bob", department: "Marketing", salary: 65000, yearsOfService: 5 },
    { name: "Charlie", department: "Engineering", salary: 80000, yearsOfService: 2 },
    { name: "Diana", department: "Sales", salary: 70000, yearsOfService: 4 },
    { name: "Eve", department: "Engineering", salary: 85000, yearsOfService: 6 }
];

//#region Exercise 1
forLoopSalary(employees);
forLoopDepartment(employees);
filterResult(employees, "Engineering");
mapNewResult(employees);
findMaxSalary(employees);
avgYearsOfService(employees);

//#endregion

console.log("---------------------------------------------")

//#region Exercise2
const customer: Customer = {
    id: 123,
    name: "สมชาย ใจดี",
    email: "somchai@example.com"
};

const items: Item[] = [
    { productId: "abc", name: "แล็ปท็อป", price: 35000, quantity: 1 },
    { productId: "def", name: "เมาส์", price: 890, quantity: 2 }
];

const address: Address = {
    street: "123 ถนนสุขุมวิท",
    city: "กรุงเทพมหานคร",
    zipCode: "10110",
    country: "ไทย"
};

const newOrder = processOrder(customer, items, address);
console.log("🚀 ~ newOrder:", newOrder)

//#endregion

console.log("---------------------------------------------")
//#region Exercise3
const A1 = registerUser({ name: "Alice", email: "alice@example.com-12", age: 12 });
const A2 = registerUser({ name: "Alice", email: "alice@example.com-13", age: 13 });
const A3 = registerUser({ name: "Alice", email: "alice@example.com-120", age: 120 });
const A4 = registerUser({ name: "Alice", email: "alice@example.com-121", age: 121 });
const A5 = registerUser({ name: "Alice", email: "alice@example.com", age: 25 });
const A6 = registerUser({ name: "Bob" }); // Missing email
const A7 = registerUser({ name: "", email: "invalid-email", age: -5 }); // Invalid data
const A8 = registerUser(null); // Invalid input

console.log("🚀 ~ A1:", A1)
console.log("🚀 ~ A2:", A2)
console.log("🚀 ~ A3:", A3)
console.log("🚀 ~ A4:", A4)
console.log("🚀 ~ A5:", A5)
console.log("🚀 ~ A6:", A6)
console.log("🚀 ~ A7:", A7)
console.log("🚀 ~ A8:", A8)

//#endregion