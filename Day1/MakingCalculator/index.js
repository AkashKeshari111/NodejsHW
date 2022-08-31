const num = process.argv.slice(2);


//sum
function sum(num) {
  let r = 0;
  for (i = 0; i < num.length; i++) {
    r += Number(num[i]);
  }

  console.log(r);
}

//substraction
function sub(num) {
  let r = num[0];
  for (i = 1; i < num.length; i++) {
    r -= Number(num[i]);
  }

  console.log(r);
}

//multiplication
function mul(num) {
  let r = 1;
  for (i = 0; i < num.length; i++) {
    r *= Number(num[i]);
  }

  console.log(r);
}


//Division
function div(num) {
  let r = 1;
  for (i = 0; i < num.length; i++) {
    r /= Number(num[i]);
  }

  console.log(r);
   

}


//sin function
function sinFun(num) {
  
  for (i = 0; i < num.length; i++) {

    let r=Math.sin(num[i])
    console.log("This is sin value of num "+num[i]+" is  "+r+" in radian");
  }

 
}

//cos function 
function cosFun(num) {
  
  for (i = 0; i < num.length; i++) {

    let r=Math.cos(num[i])
    console.log("This is cos value of num "+num[i]+" is  "+r+" in radian");
  }

 
}

//tan function 
function tanFun(num) {
  
  for (i = 0; i < num.length; i++) {

    let r=Math.tan(num[i])
    console.log("This is tan value of num "+num[i]+" is  "+r+" in radian");
  }

 
}







//Random number => comes from crypto
const { randomInt } = require("node:crypto");

//synchoronus
const n=randomInt(10000);      
console.log("I am  Sync random ",n);


//asynchronus

randomInt(10000,(err,n)=>{
  if(err) throw err;
  console.log("I am  Async random ", n);

})





//function calling
sum(num);
sub(num);
mul(num);
div(num);
sinFun(num)
cosFun(num)
tanFun(num)