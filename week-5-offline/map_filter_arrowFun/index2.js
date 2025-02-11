// <------------------------ Filtering ---------------->
/*
//1st way : General way
//create a new arra which only contains the even value
let arr= [1,2,3,4,5];
let newArr = [];

for(let i = 0 ;  i < arr.length; i++){
    if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}
console.log(newArr); //op: [ 2, 4 ]
*/

//2nd way using filter
/*.filter() is a JavaScript method that creates a new array by selecting elements that return true when passed to the filtering function (filterLogic).
Here, arr.filter(filterLogic) means:
Each number in arr is passed to filterLogic().
If filterLogic(i) returns true, the number is included in newArr.
If filterLogic(i) returns false, the number is excluded. */
let arr = [1,2,3,4,5,6];

function filterLogic(i){
    if(i % 2 == 0)return true;
    else return false
}

let newArr = arr.filter(filterLogic);
console.log(newArr) //OP: [ 2, 4, 6 ]