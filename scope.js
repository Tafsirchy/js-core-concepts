// () - block scope

const name = 'Tom Hanks' // global scope
console.log(location);

if (true) {
    const data = 58;
    console.log('Inside the if block:', data, name); // 58 Tom Hanks
    doMath(88, 999); // function call

}
// console.log(data); // error: data is not defined

// while (true) {
//     console.log('Inside the while block'); // infinite loop
// }

for (const number of [1, 2, 3, 4, 5]) { // for block scope
    console.log(number); // 1, 2, 3, 4, 5
}

// function scope or local scope
function doMath(a, b) { 
    const result = a + b;
    console.log(result); // 3
    // return result;
    
    console.log('calling doubleIt function inside doMath function',doubleIt(450)); // hoisting function call
    function doubleIt(num) {
        return num * 2;
    }
}

doMath(1, 2);
// console.log(doubleIt(450)); // doubleIt is not defined

var location = 'balur ghat'; // if you declare a variable with var keyword, it will be function scope you can acess it outside the function or from anywhere in the code

// temporal dead zone. it will stop you to access a variable before it is declared
let location = 'balur ghat'; // if you declare a variable with let keyword, it will be block scope and you can acess it only inside the block