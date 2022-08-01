let user1 = new Object();
let user2 = {};

user1.firstName = "Ivan";
user1.lastName = "Ivanov";

user2.firstName = "Petr";
user2.lastName = "Petrov";

let print = function (object) {
    console.log(object.firstName + " " + object.lastName);
}

print(user1);
print(user2);