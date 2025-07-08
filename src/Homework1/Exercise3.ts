export interface UserInput {
    name?: string,
    email?: string,
    age?: number
}

export interface ValidationError {
    message: string
}

export interface RegistrationResult {
    success: boolean,
    user?: UserInput,
    errors?: ValidationError[]
}

export function registerUser(userData: UserInput | null): RegistrationResult {
    let validation: ValidationError[] = [];

    try {
        if (userData == null) {
            validation.push({ message: "userData == null" });
            throw new Error();
        }

        if (!userData.name || userData.name.trim() === "") {
            validation.push({ message: "Name is required" });
        }

        if (!userData.email || userData.email.trim() === "") {
            validation.push({ message: "Email is required" });
        } else if (!userData.email.includes("@")) {
            validation.push({ message: "Email must contain '@' symbol" });
        }

        if (typeof userData.age !== "number" || isNaN(userData.age)) {
            validation.push({ message: "Valid age  is required" });
        } else if (userData.age < 13 || userData.age > 120) {
            validation.push({ message: "age not suitable" });
        }

        if (validation.length > 0) {
            throw new Error();
        } else {
            return { success: true, user: userData };
        }
    } catch (error) {
        return { success: false, errors: validation };
    }
}
