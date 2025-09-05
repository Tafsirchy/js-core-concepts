/**
 * undefined ---> not defined
 */

let money;
// console.log(money);

function total(a, b){
    console.log('value of parameter: ',a, b);
    const sum = a + b;
    // console.log('total is:',sum);
}

function total2(a, b){
    console.log('value of parameter: ',a, b);
    if(a === undefined || b === undefined){
        return;
    }
    if (a && b){
        return a + b;
    }
}

// total(2);
// const result = total(5, 7);
// console.log('value of function call:',result)

const result2 = total2(3);
// console.log('result2',result2);

const phone = {
    name: 'samsung',
    price: 20000
}
// console.log(phone.color);

const banks = ['dbbl', 'brac', 'exim', 'ibbl'];
// console.log(banks[4]);
delete banks[1];
console.log(banks);
console.log(banks[1]);

console.log('type of undefined is:',typeof undefined);
console.log('null is:', typeof null);