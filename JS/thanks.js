function redirect(){
    window.location.href = "../index.html"
}

function displayy1(){
    document.getElementById('d1').style.display = 'block';
}
function displayy2(){
    document.getElementById('d2').style.display = 'block';
}
function displayy3(){
    document.getElementById('d3').style.display = 'block';
}

setTimeout(displayy1,1000);
setTimeout(displayy2,2000);
setTimeout(displayy3,3000);

function happylearn(){
   document.getElementById('happy-learn').style.display = 'block';
}
setTimeout(happylearn,4000);
setTimeout(redirect,6000);