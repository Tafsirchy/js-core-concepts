// function counter () {
//     let count = 0;
//     // const numbs = [];
//     // const people = {};
//     function innerFunction () {
//         console.log('inside innerFunction, someone calling me');
//     }
//     return innerFunction;
// }

// const output = counter();
// console.log(output());
// // console.log(output);

function counter () {
    let count = 10;

    return function (user) {
        count ++;
        console.log('inside innerFunction, someone calling me',user, count, 'times');
        // console.log(`inside innerFunction, someone calling me ${count} times`);
    }

}

// const innerFunction = counter();
// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();

const rahimCounter = counter();
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
console.log('-------------------------------------------------------');
const karimCounter = counter();
karimCounter('karim');
// karimCounter('karim');
// karimCounter('karim');
// karimCounter('karim');
// karimCounter('karim');
console.log('-------------------------------------------------------');
rahimCounter('rahim');
rahimCounter('rahim');
console.log('-------------------------------------------------------');
const jabbarCounter = counter();
jabbarCounter('jabbar');
jabbarCounter('jabbar');
jabbarCounter('jabbar');
console.log('-------------------------------------------------------');
karimCounter('karim');
console.log('-------------------------------------------------------');
rahimCounter('rahim');