let data;
// data = 0; // zero is falsy
// data = ''; //empty string is falsy
// data = ' '; // has an white space
// data = '0'; // 0 in a string is truthy
// data = false; // false is falsy
// data = true; // true is truthy
// data = null; // null is falsy
// data = undefined; // undefined is falsy
// data = NaN; // NaN is falsy
// data = {}; // empty object is truthy
data = []; // empty array is truthy

console.log('value of data is:',data);

if(data) {
    console.log(data,'is truthy');
}
else{
    console.log(data,'is falsy');
}

// if i need to capture a falsy value to go inside a if block 
// then use logical not operator
if(!data) { //! --> is called logical not operator and the condition will be true if the value is falsy
    console.log(data,'i am from inside of if block with a falsy value');
}

// capture all positive value
// double not (!!)
// capture any value to boolean (ture false)
if(data === true) {
    console.log('only true form inside the double not or if block');
}
if(!!data === true) {
    console.log('only true form inside the double not or if block');
}