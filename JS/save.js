var parent = document.getElementById("content");

// var len = arr.length
// var sv= document.getElementById('save')
// sv.textContent="Save"+"("+len+")"
//    sv.setAttribute("class", "sv1")

function learningshow(){

let arr= JSON.parse(localStorage.getItem('S_data'));
parent.innerHTML = null;

  let ids = [];
  let unique_arr = [];

  arr.forEach((el) => {
      if(!ids.includes(el._id)){
          ids.push(el._id);
         unique_arr.push(el);
        }
  })

//console.log(ids,unique_arr,arr);

    var len = unique_arr.length
    var sv= document.getElementById('save')
    sv.textContent="Save"+"("+len+")"

    unique_arr.forEach((el) => {
  
    var s1div= document.createElement('div');
    s1div.setAttribute("class", "s1div")
     var s2div= document.createElement('div');
     s2div.setAttribute("class", "s2div");

     var simg= document.createElement('img');
     simg.src=el.img;
     simg.setAttribute("class","simg");

     s2div.append(simg);

     var s3div= document.createElement('div');
     s3div.setAttribute("class", "s3div")

     var sp1= document.createElement('p');
     sp1.setAttribute("class", "sp1")
     sp1.textContent = "COURSE";

     var sp2= document.createElement('p');
     sp2.setAttribute("class","sp2")
     sp2.textContent = el.name;

     var sp3= document.createElement('p');
     sp3.setAttribute("class","sp3")
     sp3.textContent = el.by

     s3div.append(sp1,sp2,sp3);
     s1div.append(s2div,s3div)

     var s4div= document.createElement('div')
     s4div.setAttribute("class","s4div")
     s4div.textContent = "Add to Collection";

     var remove = document.createElement("p");
     remove.setAttribute("class" , "remove");
     remove.innerHTML = "...";

     
     
     remove.onclick = function (){
         remove_course(el,arr);
     }
  
     s1div.append(remove,s4div)

     var hr= document.createElement('hr')
     parent.append(s1div,hr);
    

})

}
learningshow();

function remove_course(el,arr){

let change_arr = arr.filter(( arrr) =>  arrr._id != el._id);
console.log(change_arr)

localStorage.setItem('S_data',JSON.stringify(change_arr));

  learningshow();

}






