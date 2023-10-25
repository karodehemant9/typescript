const no1 = document.getElementById('num1') as HTMLInputElement; //telling Ts that the element will be a HTMLInputElement (Explicit typecasting) 
const no2 = document.getElementById('num2') as HTMLInputElement; //removing error on line no 6 and 7
const addbutton = document.getElementById('add') as HTMLButtonElement;

const numResults: number[] = []; //number array (defining Explicitly)
const textResults: string[] = []; //string array  (defining Explicitly)




// function add(num1: number, num2: number){ //function takes number type arguments
//   return num1 + num2;  
// }

//union types to make add function more flexible
function add(num1: number | string, num2: number | string) { //function takes number type arguments or string type arguments
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + '' + num2;
  }
  return +num1 + +num2; //if we have num1 and num2 of diffrent types. We make them both number type

}

addbutton.addEventListener('click', () => {
  const num1 = no1.value;      //we get error here because TS don't know the type of element 'no1'. It can be a paragraph element which don't have a value property. (All HTML element don't have value property) 
  const num2 = no2.value;
  const result = add(+num1, +num2); // making num1 and num2 explicitly number type
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);
  console.log(numResults, textResults); //we get error here because default array type is 'any' type. because the values array store can be any type
  printResult({ val: result as number, timestamp: new Date() })

})

console.log(add(1, 6));

function printResult(resultObj: { val: number, timestamp: Date }) { //defining the structure for object no we can't pass any random object. Our object should look like this {val: number, timestamp: Date}. it should contain only two properties with defined types
  console.log(resultObj.val);
}





//defining and naming complex custom data types. Commonly used with 'union type'
type NumOrString = number | string;  //type aliase

function add1(num1: NumOrString, num2: NumOrString) { //function takes number type arguments or string type arguments
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + '' + num2;
  }
  return +num1 + +num2; //if we have num1 and num2 of diffrent types. We make them both number type

}


type MyObjType = { val: number, timestamp: Date }; //defining the structure for object no we can't pass any random object. Our object should look like this {val: number, timestamp: Date}. it should contain only two properties with defined types

function printResult1(resultObj: MyObjType) {
  console.log(resultObj.val);
}



//interface to define structure of an object. Just like classes and interface in java (have fixed structure)
interface StudentType {
  rollno: number;
  name: string;
}


function printStudent(student: StudentType) {
  console.log(student.rollno);
}




//Generics:
const myPromise = new Promise<string>((resolve, reject) => { // angle brackets <> telling that this promise resolve value will be of string type
  setTimeout(() => {
    resolve('It worked');

  }, 2000)

})


myPromise
  .then((result) => {
    console.log(result.split('w'));

  })
  .catch((err) => {
    console.log(err);

  })

//Promise is a generic type because the type of value which is being resolved, is the generic type for promise