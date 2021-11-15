
var obj = JSON.parse(localStorage.getItem('displayed_data'));
console.log(obj);

function update(){

    if(obj === null){
        return false;
    }
    var img = document.createElement('img');
    img.src=obj.image;

   let div = document.createElement('div'); div.setAttribute('id','divv')

   let course = document.createElement('div'); course.setAttribute('id','course')
   course.innerText = "course";

   let title = document.createElement('div');  title.setAttribute('id','title')
   title.innerText = obj.title;

   let by = document.createElement('div'); by.setAttribute('id','by');
   by.innerText = obj.by;

   div.append(course,title,by);

    var imgdiv = document.getElementById('trial-img');
    imgdiv.append(img,div);   
}
update();

function gotohome(){
    window.location.href = '../index.html';
}