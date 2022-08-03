
let initObject = function(firstName, lastName) {
    return {
        firstName,
        lastName,
        print() {
            console.log("First Name: " + this.firstName);
            console.log("Last Name: " + this.lastName);
        }
    }
}

let obj1 = initObject("Ivan", "Ivanov");
let obj2 = initObject("Jhon", "Doe");
let obj3 = initObject("Mary", "Smith");
let obj4 = initObject("Nicola", "Tesla");

 
obj1.print();
obj2.print();
obj3.print();
obj4.print();