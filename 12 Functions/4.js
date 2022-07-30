
let values = [17, 10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
let oddValues = [];
let evenValues = [];
let oddValuesPosition = 0;
let evenValuesPosition = 0;


const evenVal = values.filter(evenValFunc);
function evenValFunc(value) {
    if (value % 2 == 0) {
        evenValues.push(value);
    }
}


const oddVal = values.filter(oddValFunc);
function oddValFunc(value) {
    if (value % 2 != 0) {
        oddValues.push(value);
    }
}


console.log("Нечетные значения");
oddValues.forEach(e => console.log(e));


console.log("Четные значения");
evenValues.forEach(e => console.log(e));

