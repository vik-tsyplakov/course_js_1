let userInner = prompt(`Введите ваше число!`);
let innerArr = [];
let newArray = [];
function reverse(x) {
    newArray = x.slice().reverse();
}

if (userInner != 1 ) {
    innerArr.push(userInner);
}
else {
    alert(`Введите другое число`);
}





/*do {
    userInner = prompt(`Введите ваше число!`);
    innerArr.push(userInner);
    if (userInner !== 1) {
        
    }
    /*else if(userInner == 1) {
    innerArr.push(userInner);
    reverse(innerArr);
    break;
    }
} while (userInner != 1);*/




while (userInner != 1) {
    userInner = prompt(`Введите ваше число!`);
    innerArr.push(userInner);
}

if (userInner != 1 ) {
}
else if (userInner == 1) {
    reverse(innerArr);
}

console.log(`Оригинальный массив ${innerArr}`);
console.log(`Реверсивный массив ${newArray}`);

/*for (i = 0; i < innerArr.length; i++) {
    userInner = prompt(`Введите ваше число!`);
    if (isNaN(userInner)) {
        innerArr.push(userInner);
    }
    else if(userInner == 1) {
        reverse(innerArr);
    }
    console.log(`Оригинальный массив ${innerArr}`);
    console.log(`Реверсивный массив ${newArray}`);
}*/
