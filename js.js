let mybutton = document.querySelector("#myBtn");

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    mybutton.style.display = "block";
   else 
    mybutton.style.display = "none";
}

mybutton.onclick = () =>  {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}