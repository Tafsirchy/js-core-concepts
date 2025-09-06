// all premetive values (numbers, strings, booleans, null, undefined, symbols) are always pass by value.
function multiply(x, y) {
    x = x * 2;
    y = y * 2;
    console.log('inside the function', x, y);
    const mult = x * y;
    return mult;
}

const a = 7;
const b = 6;
console.log('before the function call', a, b);

// const result = multiply(5, 6);
const result = multiply(a, b);
console.log(result);
console.log('after the function call', a, b);


// non primitive values (objects, arrays) are always pass by reference.
const manik = {name: 'Manik', balance: 5000};
const roton = {name: 'Roton', balance: 40000};

console.log('before the function call', manik, roton);

function totalMoney (person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total = person1.balance + person2.balance;
    return total;
}

const balance = totalMoney(manik, roton);
console.log('Balance', balance );

console.log('after function call', manik, roton);
