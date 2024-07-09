let x =  function(e) {
  console.log(event.target);
  console.log(event.type,event.clientX,event.clientY);
  }
// let y =  function(e) {
//   console.log(e);
//   alert('Hello World2!');
// }

btn.addEventListener('click',x)
// btn.addEventListener('click', y)

// let a = prompt("Write a number of your own choice!")
// if(a==2){
//   btn.removeEventListener('click',y)