//problem 3 repeat the question 2 using event listner
document.getElementsById("google").addEventListner("click", function(){
  window.location= "http://google.com";
  win.focus();
})

setInterval(async function(){
  document.querySelector("bulb").classList.toggle("bulb")
},3000)