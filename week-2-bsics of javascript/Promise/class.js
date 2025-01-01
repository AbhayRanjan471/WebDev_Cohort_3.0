// class shape{

//   constructor (m , n, color){
//     this.m = m; // this refrs to the current object eg: obj , obj2
//     this.n = n;
//     this.color = color
//   }

//   area(){
//     return this.m * this.n;
//   }
//   print(){
//     console.log(`the paint color is `+this.color)
//   }
// }

// const obj = new shape(10,20,"red");
// const area = obj.area();
// console.log(area);
// const obj2 = new shape(10,20,"red");
// const print = obj2.print();

let rect ={
    m : 10,
    n : 20,
    color: 'red'
  }
  
  function area(rect){
    let ans = rect.m * rect.n;
    return ans1={ans,color:'pink'};
  }
  
  let s = area(rect);
  console.log(s)
  console.log(s.color);