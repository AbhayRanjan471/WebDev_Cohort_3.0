// let arr = [{
//     userName : "Abhay",
//     age: 10
// }]

// function user(arr){
//     if(arr[0].age > 19){
//         console.log("u are eligible");
//     }
//     else{
//         console.log("fuck off");
//     }
// }

// user(arr);

function findUser(arr){
    let len = arr.length;
    for(let i = 0 ; i < len ; i++){
        if(arr[i].age > 18){
            console.log("Hi "+arr[i].name+" age: "+arr[i].age + " gender: "+arr[i].gender)
        }
        else{
            console.log("get lost");
        }
    }
}

const user = [{
    name: "Abhay",
    age: 20,
    gender: "male"
},
{
    name: "Ranjan",
    age: 10,
    gender: "male"
},
{
    name: "kashyap",
    age: 22,
    gender: "male"
}]

findUser(user);