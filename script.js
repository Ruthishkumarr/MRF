//! Without Map

/*
var input =[12,13,14,15];
Expected o/p = [24,26,28,30]
*/

var input = [12, 13, 14, 15];
var result = [];
for (var i = 0; i < input.length; i++) {
  result.push(input[i] * 2);
}
//? console.log(result)

// ----------------------------------------------------------------------------------------

//! With Map (We Can Use Three types Achieve o/p With use 3 Types of Function..but here we used Arrow Func)

var input1 = [12, 13, 14, 15];
var result1 = input1.map((mul) => mul * 2);
// console.log(result1);

// ------------------------------------------------------------------------------------------------

//! Reduce

//*Sum of the Array Without Reduce

const array = [1, 2, 3, 4, 5];
var sum = 0;
for (let i = 0; i < array.length; i++) {
  sum = sum + array[i];
}

// console.log(sum);

//--------------------------------------------------------------------------------------------------

//? Sum of the Array With using Reduce

const arra = [1, 2, 3, 4, 5];
const resu = arra.reduce((acc, cv) => {
  return acc + cv;
}, 0);
console.log(resu);


//---------------------------------------------------------------------------------------------------

//* Without Filter

var input2 = [12, 13, 14, 15];
var result2 = [];
for (let i = 0; i < input2.length; i++) {
  if (input[i] % 2 === 0) {
    result2.push(input2[i]);
  }
}
// console.log(result2);

//-----------------------------------------------------------------------------------------------------

//! With Filter
var input3 = [12, 13, 14, 15];
var result3 = input3.filter((even) => even % 2 === 0);
// console.log(result3);

//-------------------------------------------------------------------------------------------------------
