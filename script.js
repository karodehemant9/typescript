"use strict";
const no1 = document.getElementById('num1'); //telling Ts that the element will be a HTMLInputElement (Explicit typecasting) 
const no2 = document.getElementById('num2'); //removing error on line no 6 and 7
const addbutton = document.getElementById('add');
const numResults = []; //number array (defining Explicitly)
const textResults = []; //string array  (defining Explicitly)
// function add(num1: number, num2: number){ //function takes number type arguments
//   return num1 + num2;  
// }
//union types to make add function more flexible
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2; //if we have num1 and num2 of diffrent types. We make them both number type
}
addbutton.addEventListener('click', () => {
    const num1 = no1.value; //we get error here because TS don't know the type of element 'no1'. It can be a paragraph element which don't have a value property. (All HTML element don't have value property) 
    const num2 = no2.value;
    const result = add(+num1, +num2); // making num1 and num2 explicitly number type
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(numResults, textResults); //we get error here because default array type is 'any' type. because the values array store can be any type
    printResult({ val: result, timestamp: new Date() });
});
console.log(add(1, 6));
function printResult(resultObj) {
    console.log(resultObj.val);
}
function add1(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2; //if we have num1 and num2 of diffrent types. We make them both number type
}
function printResult1(resultObj) {
    console.log(resultObj.val);
}
function printStudent(student) {
    console.log(student.rollno);
}
//Generics:
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 2000);
});
myPromise
    .then((result) => {
    console.log(result.split('w'));
})
    .catch((err) => {
    console.log(err);
});
//Promise is a generic type because the type of value which is being resolved, is the generic type for promise
