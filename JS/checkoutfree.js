let obj = {
    by: "By:Kethrin",
date: "19th September 2020",
img: "https://www.incimages.com/uploaded_files/image/1920x1080/public-speaking-1940x900_35061.jpg",
link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
name: "Python programming for begineers",
price: 1500,
time: 40,
title: "PYTHON"}




function update(){

    var img = document.createElement('img');
    img.src='https://www.incimages.com/uploaded_files/image/1920x1080/public-speaking-1940x900_35061.jpg'

   let div = document.createElement('div'); div.setAttribute('id','divv')

   let course = document.createElement('div'); course.setAttribute('id','course')
   course.innerText = "course";

   let title = document.createElement('div');  title.setAttribute('id','title')
   title.innerText = obj.name;

   let by = document.createElement('div'); by.setAttribute('id','by');
   by.innerText = obj.by;

   div.append(course,title,by);

    var imgdiv = document.getElementById('trial-img');
    imgdiv.append(img,div);   
}
update();