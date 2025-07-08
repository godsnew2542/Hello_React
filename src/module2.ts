import { Student } from "./interface"

export function display_student(s: Student) {
    console.log("🚀 ~  display_student :", `${s.name}, ${s.code}${(s?.gpa != undefined ? `, ${s.gpa}` : "")}`)
}