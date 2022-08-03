let user = {
    balance: "$1,250.89",
    age: 24,
    name: "Golden Clements",
    company: "EWAVES",
    email: "golden.clements@ewaves.io",
    friends: 5,
    favoriteFruit: "strawberry",
};

for (const key in user) {
    if (typeof user[key] == 'string') {
        console.log(`Ключ ${key} = ${user[key]}`);
    }
    
}