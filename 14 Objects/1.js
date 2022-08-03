let obj1 = {
    firstName: "Ivan",
    lastName: "Ivanov",

    print: function (obj) {
        console.log("First Name: " + this.firstName);
        console.log("Last Name: " + this.lastName);
    }
};

obj1.print();

let obj2 = {
    firstName: "Petr",
    lastName: "Petrov",

    print: function (obj) {
        console.log("First Name: " + this.firstName);
        console.log("Last Name: " + this.lastName);
    }
};

obj2.print();