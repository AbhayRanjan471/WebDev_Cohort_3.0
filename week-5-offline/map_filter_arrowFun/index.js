//given an array , give me a new array in which every element is multipliid by 2

/*
//1st way : General way
let arr= [1,2,3,4,5];
let newArr = [];

for(let i = 0 ;  i < arr.length; i++){
    newArr[i]= arr[i]*2;
}
console.log(newArr); //op: [ 2, 4, 6, 8, 10 ]
*/

////////////2nd way using map///////
let arr= [1,2,3,4,5];

function transform(i){
    return i*2;
}
/*.map() is a built-in JavaScript method that creates a new array by applying a function to each element of the original array.
Here, arr.map(transform) means:
Each number in arr is passed into the transform function.
The transform function multiplies it by 2.
A new array is created with the transformed values.
.map() creates a new array without changing the original one.
*/
//arr.map transform every value of arr , using the funciton which we have passed "transfrom"
let newArr = arr.map(transform);
console.log(newArr); //OP: [ 2, 4, 6, 8, 10 ]

//Other way to write the above funciton
let newInput = arr.map(function(i){
    return i*2;
})
console.log(newInput); //Op: [ 2, 4, 6, 8, 10 ]