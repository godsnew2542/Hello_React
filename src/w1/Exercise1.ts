import { Employees } from "./index";

export function forLoopSalary(emp: Employees[]) {
    let totalSalary: number = 0;
    emp.forEach(x => totalSalary += x.salary);
    console.log("🚀 ~ totalSalary:", totalSalary)
}

export function forLoopDepartment(emp: Employees[]) {
    emp.forEach(x => {
        console.log(`🚀 name: ${x.name}, department: ${x.department}`)
    });
}

export function filterResult(emp: Employees[], findData: string) {
    let result = emp.filter(x => x.department == findData)
    console.log("🚀 ~ filterResult:", result)
}

export function mapNewResult(emp: Employees[]) {
    type A = { name: String, };
    type B = { salary: number, };
    type newClass = A & B;

    let newVal: newClass[] = [];
    emp.map((data) => {
        newVal.push(
            {
                name: data.name,
                salary: data.salary
            }
        );
    })
    console.log("🚀 ~ map newVal:", newVal)
}

export function findMaxSalary(emp: Employees[]) {
    const maxSalaryEmployee = emp.find(e => e.salary === Math.max(...emp.map(x => x.salary)));
    console.log("🚀 ~ max salary:", maxSalaryEmployee);
}

export function avgYearsOfService(emp: Employees[]) {
    const totalYears = emp.reduce((sum, e) => sum + e.yearsOfService, 0);
    const avg = totalYears / emp.length;
    console.log("🚀 ~ avg yearsOfService:", avg);
}
