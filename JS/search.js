


let items = JSON.parse(localStorage.getItem("search"));
  //  console.log('items:', items);
  let cors = document.getElementById("get-items");

  function searchitem() {
    items.forEach((el) => {
      //   cors.innerHTML = null;
      let div = document.createElement("div");
      div.setAttribute("class", "courses");
      
      div.addEventListener('click',run)

      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("class", "imgdiv");
      let img = document.createElement("img");
      img.src = el.img;

      let div2 = document.createElement("div");
      div2.setAttribute("class", "text-part");
      let title = document.createElement("h2");
      title.innerText = el.name;

      let p = document.createElement("p");
      p.innerText = el.p;
      let by = document.createElement("p");
      by.innerText = el.by + " " + " ' " + el.date;

      //   let date = document.createElement("span");
      //   date.innerText = el.date;
      let views = document.createElement("p");
      views.innerText = el.view;

      imgdiv.append(img);
      div2.append(p, title, by, views);

      div.append(imgdiv, div2);
      cors.append(div);

      function run(){
        window.location.href = '/ay_index.html'
      }
    });
  }
  searchitem();