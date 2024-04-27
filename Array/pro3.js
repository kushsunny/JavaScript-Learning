//Spread Operator (...)

//why? 
//1. Creating a new array with an already existing array

let arr1=[1,2,3,4,5]; 
let arr2=[...arr1,6,7,8,9,10]; 

console.log(arr2)

let arr=[0,9,8,7,6]; 

arr3=[1,2,3,4,5,...arr,...arr1,...arr2]; 

console.log(arr3)