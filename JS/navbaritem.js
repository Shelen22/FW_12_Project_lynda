import { navbar } from "../component/navbar.js";

let nab = document.getElementById("nab");
nab.innerHTML = navbar();

let dropdown = document.getElementById("drop");
dropdown.addEventListener("click", (user) => {
  let menu = document.getElementById("menu");
  menu.style.display = "block";
});

let drop = document.getElementById("menu");
drop.addEventListener("mouseleave", (users) => {
  let menu = document.getElementById("menu");
  menu.style.display = "none";
});

let search_btn = document.getElementById("search-btn");
search_btn.addEventListener("click", search);

async function search() {
  let input_search = document.getElementById("search-input").value;

  let res = await fetch("../search-js/search.json");
  let d = await res.json();

  let data = d.data;
  console.log('data:', data)

  let scrh = data.filter((el) => {
  

    if (el.name.toLowerCase().includes(input_search)) {
      return el;
    }
  });
  
   localStorage.setItem("search",JSON.stringify(scrh));
 

   window.location.href = "../html/search.html";
}

let reg = document.getElementById('change');
let reg2 = document.getElementById('chnge');
let reg3 = document.getElementById('username-chnge');


if(localStorage.getItem('user') !== null){
  if(reg){
      reg.innerHTML = JSON.parse(localStorage.getItem('user'));
      reg2.innerHTML = JSON.parse(localStorage.getItem('user'));
      reg3.innerHTML = JSON.parse(localStorage.getItem('user'));

  }
  else{
    reg2.innerHTML = JSON.parse(localStorage.getItem('user'));

  }
    //  reg.innerHTML = JSON.parse(localStorage.getItem('user'));
    //  reg2.innerHTML = JSON.parse(localStorage.getItem('user'));
    //  reg3.innerHTML = JSON.parse(localStorage.getItem('user'));
      let signup = document.querySelector(".sign-up");
      signup.style.display ="none";
      let signup2 = document.querySelector(".sign-up-remove");
      signup2.style.display ="block";
  }
 
  let signout = document.getElementById('signout');
  signout.addEventListener('click', signout2 =>{
      localStorage.removeItem('user');
      window.location.href = "../index.html";
      // let menu = document.getElementById("menu");
      // menu.style.display = "none";
      // reg2.innerHTML = "username";
      // reg.innerHTML = "username";
      // reg3.innerHTML = "username";  

  });
