let a = document.clickbyclassName("container")[0]
a.onclick=()=>{
  let b = document.clickbyclassName("container")[0]
  b.innerHTML("Hello");
}