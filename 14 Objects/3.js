
let initProducts = function (name, price) {
    return {
        name,
        price,
        ordered: 0,
    } 
}
let products = [
    initProducts("Бумага офисная А4, 80 г/м2, 500 л", 280.25),
    initProducts("Биндеры для бумаги 51 мм", 56),
    initProducts("Ручка шариковая синяя", 12.5),
];

console.log(products);

// цикл для получения количества покупаемых продуктов
for (let index = 0; index < products.length; index++) {
    const name = products[index].name;
    const price = products[index].price;

    products[index].ordered = +prompt(
        `Укажите количество продуктов '${name}', цена ${price}`,
        0
    );
}


let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += products[index].price * products[index].ordered;
}

alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
    if (isFreeShipping) {
    // иногда в условии используется только одна переменная.
    alert("Доставка будет бесплатной.");
}