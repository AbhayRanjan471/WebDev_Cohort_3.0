console.log("Promises");

const cart = ["shoes","pant","kurta"];

//cretaing an e-commerce Api
//In this we are passing a calback function as an argument to the funciton, which becomes complicated, So to avoide 
//this "Promise" came into picture
creatOrder(cart, function(orderId){
    procedToPaymet(orderId, function(paymetInfo){
        ShowOredrSummary(paymetInfp, function(){
            updateWalletBalance();
        })
    })
})

///////// Promise ////////////
creatOrderOr(cart) 
 .then((orderId)=> procedToPaymet(orderId))
 .then((paymetInfo) => ShowOredrSummary(paymetInfo))
 .then(updateWalletBalance());