class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}

function greeter(person: Person) {
    return "Hello" + person.fullName
}

let user = new Student('Jane', 'M.', "user")

console.log(user)

console.log(greeter(user))