// type cuersion (type convert)
//

/**
 * for double equal js will convert both value to same type then compare
 * for double equal 
 * if one value is string and another value is number then js will convert string to number then compare
 */

console.log(2 == 2);
console.log(2 == '2');
console.log(2 == '12');
console.log(1 == '1');
console.log(1 == 2);
/**
 * if one is boolean and another is number then js will convert boolean to number then compare
 * true ---> 1
 * false --- > 0
 */
console.log(true == 1);
console.log(false == 0);
console.log(true == '1'); // 1 == '1' ---> 1 == 1 ---> true
console.log(false == '0'); // 0 == '0' ---> 0 == 0 ---> true
console.log(null == undefined); // because null and undefined both are represent nothing or null value
console.log(NaN == NaN); // NaN is not equal to any value
console.log(0 == '');
console.log([] == '');
console.log([5] == '5');
console.log([5] == 5);
console.log({} == {}); // object is not equal to any other object and it was a non-premetive data type
console.log([] = []); // array is not equal to any other array and it was a non-premetive data type

const p = [5, 6, 7, 8, 9];
const q = p;
console.log(p == q); // true because both are same reference