document.write("Hello")
const sum=(a,b)=>{
  console.log("The sum of a and b is "+(a+b));
}
setTimeout(sum,2000,1,2) //We use setTimeout to run a function after a given time.
setInterval(function(){
  alert("setInterval")
}300) //We use setinterval when we want to run a function repeatedly after a given interval of time.
let a = setTimeout(function(){
  alert("I am inside of setTimeout")
},5000)
let b = prompt("Do you want to run the setTimeout?")
if("n"==y){
  clearTimeout(a);//WE use clearTimeout to cancel the execution of setTimeout.
}
clearTimeout(a);
console.log(a);