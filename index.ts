function add(x: number, y: number): number {
    return x + y;
}
// console.log("add:", add(5, 9))

type A = { a: number[] };
type B = { b: string };
type C = A & B;
const C: C = { a: [1, 2, 3], b: "example" };
// console.log("🚀 ~  C :", C)

interface Point {
    x: number,
    y: number,
}

function find_distance(p1: Point, p2: Point): number {
    let a = p1.x - p2.x;
    let b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b)
}

const p5: Point = { x: 1, y: 1 }
const p6: Point = { x: 7, y: 9 }

console.log("🚀 ~  find_distance :", find_distance(p5, p6))