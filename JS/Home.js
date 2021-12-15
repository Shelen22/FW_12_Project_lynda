
async function search1() {

  
    let res = await fetch("http://localhost:2244/course/course1");
    let course1 = await res.json();
    // console.log(course1)
    showCourse1(course1)
}

search1();
    
      function showCourse1(products){

    products.forEach(function(p){
            var content = document.getElementById('sc')
          var div1=document.createElement('div');
          div1.setAttribute('class','div4');
          var div2=document.createElement('div');
          div2.setAttribute('class','a1');
          var img =document.createElement('img');
          img.src=p.img;
          div2.append(img);
          var div3=document.createElement('div');
          div3.setAttribute('class','a2')
          var h4=document.createElement('h4');
          h4.textContent='Course'
          div3.append(h4);

          var div4=document.createElement('div');
          div4.setAttribute('class','a3')
          var h4=document.createElement('h4');
          h4.textContent=p.name;
          div4.append(h4);

          var div5=document.createElement('div');
          div5.setAttribute('class','a4')
          var h4=document.createElement('h4');
          h4.textContent=p.by;
          div5.append(h4);

          var div6=document.createElement('div')
          div6.setAttribute('class','a6 a7')

          div6.textContent='Let us now see a list of the Most popular Lynda Courses details that will help you to be a certified Professional. This list contains Top-rated Online Lynda Courses:'
         
          div1.append(div2,div3,div4,div5,div6)
          content.append(div1);
          div1.addEventListener('click', function(){
    move(p)
  })

  function move(data){
    localStorage.setItem('H_data',JSON.stringify(data));
    window.location.href ='../html/ay_index.html'
  }
        })
    }
    
        var span7 = document.getElementById('span_7');
        var span8 = document.getElementById('span_8');
        // console.log(span)
        var div4 = document.getElementsByClassName('div4');
        var l = 0;
        span8.addEventListener('click', right4)
        function right4() {
        //   console.log('anny')
            l++;
            for (var i of div4) {
            //   console.log(i)
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l > 4) {
                    l = 4;
                }

            }
        }
        span7.addEventListener('click', left4)
        function left4() {
            l--;
            for (var i of div4) {
            //   console.log('abhi')
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l < 0) {
                    l = 0;
                }

            }
        }










async function search2() {
  
    let res = await fetch("http://localhost:2244/course/course2");
    let course2 = await res.json();
    // console.log(course2)
    showCourse2(course2)
}

search2();

function showCourse2(products){


        products.forEach(function (p) {
            var content3 = document.getElementById('sc3')
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'div3');
            var div2 = document.createElement('div');
            div2.setAttribute('class', 'a1');
            var img = document.createElement('img');
            img.src = p.img;
            div2.append(img);
            var div3 = document.createElement('div');
            div3.setAttribute('class', 'a2')
            var h4 = document.createElement('h4');
            h4.textContent = 'Course'
            div3.append(h4);

            var div4 = document.createElement('div');
            div4.setAttribute('class', 'a3')
            var h4 = document.createElement('h4');
            h4.textContent = p.name;
            div4.append(h4);

            var div5 = document.createElement('div');
            div5.setAttribute('class', 'a4')
            var h4 = document.createElement('h4');
            h4.textContent = p.by;
            div5.append(h4);

            var div6 = document.createElement('div')
            div6.setAttribute('class', 'a6 a7')

            div6.textContent = 'Let us now see a list of the Most popular Lynda Courses details that will help you to be a certified Professional. This list contains Top-rated Online Lynda Courses:'

            div1.append(div2, div3, div4, div5, div6)
            content3.append(div1);
            div1.addEventListener('click', function () {
                move(p)
            })
            function move(data) {
                localStorage.setItem('H_data', JSON.stringify(data));
                window.location.href = '../html/ay_index.html'
            }
        })
    }

        var span1 = document.getElementById('span_1');
        var span2 = document.getElementById('span_2');
        var div3 = document.getElementsByClassName('div3');
        var l = 0;
        span2.addEventListener('click', right3)
        function right3() {
            // console.log('anny')
            // console.log(div3)
            l++;
            for (var i of div3) {
                // console.log(i)
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l > 4) {
                    l = 4;
                }

            }
        }
        span1.addEventListener('click', left3)
        function left3() {
            l--;
            for (var i of div3) {
                // console.log('abhi')
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l < 0) {
                    l = 0;
                }

            }
        }










async function search3() {
  
    let res = await fetch("http://localhost:2244/course/course3");
    let course3 = await res.json();
    // console.log(course3)
    showCourse3(course3)
}

search3();

function showCourse3(products){


        products.forEach(function (p) {
            var content2 = document.getElementById('sc2')
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'div2');
            var div2 = document.createElement('div');
            div2.setAttribute('class', 'a1');
            var img = document.createElement('img');
            img.src = p.img;
            div2.append(img);
            var div3 = document.createElement('div');
            div3.setAttribute('class', 'a2')
            var h4 = document.createElement('h4');
            h4.textContent = 'Course'
            div3.append(h4);

            var div4 = document.createElement('div');
            div4.setAttribute('class', 'a3')
            var h4 = document.createElement('h4');
            h4.textContent = p.name;
            div4.append(h4);

            var div5 = document.createElement('div');
            div5.setAttribute('class', 'a4')
            var h4 = document.createElement('h4');
            h4.textContent = 'By: Shawn Brant'
            div5.append(h4);

            var div6 = document.createElement('div')
            div6.setAttribute('class', 'a6 a7')

            div6.textContent = 'Let us now see a list of the Most popular Lynda Courses details that will help you to be a certified Professional. This list contains Top-rated Online Lynda Courses:'

            div1.append(div2, div3, div4, div5, div6)
            content2.append(div1);
            div1.addEventListener('click', function () {
                move(p)
            })
            function move(data) {
                localStorage.setItem('H_data', JSON.stringify(data));
                window.location.href = '../html/ay_index.html'
            }
        })
    }
        var span3 = document.getElementById('span_3');
        var span4 = document.getElementById('span_4');
        var div2 =  document.getElementsByClassName('div2');
        var l = 0;
        span4.addEventListener('click', right2)
        function right2() {
            // console.log(div2)
            l++;
            for (var i of div2) {
                console.log(i)
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l > 4) {
                    l = 4;
                }

            }
        }
        span3.addEventListener('click', left2)
        function left2() {
            // console.log('abc')
            l--;
            for (var i of div2) {
                // console.log('abc')
                // console.log('abhi')
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l < 0) {
                    l = 0;
                }

            }
        }









async function search4() {
  
    let res = await fetch("http://localhost:2244/course/course4");
    let course4 = await res.json();
    // console.log(course4)
    showCourse4(course4)
}

search4();

function showCourse4(products){
        products.forEach(function(p){
            var content1 = document.getElementById('sc1')
          var div1=document.createElement('div');
          div1.setAttribute('class','div1');
          var div2=document.createElement('div');
          div2.setAttribute('class','a1');
          var img =document.createElement('img');
          img.src=p.img;
        //   './pics/abc.jpg'
          div2.append(img);
          var div3=document.createElement('div');
          div3.setAttribute('class','a2')
          var h4=document.createElement('h4');
          h4.textContent='Course'
          div3.append(h4);

          var div4=document.createElement('div');
          div4.setAttribute('class','a3')
          var h4=document.createElement('h4');
          h4.textContent=p.name
          div4.append(h4);

          var div5=document.createElement('div');
          div5.setAttribute('class','a4')
          var h4=document.createElement('h4');
          h4.textContent='By: Shawn Brant'
          div5.append(h4);

          var div6=document.createElement('div')
          div6.setAttribute('class','a6 a7')

          div6.textContent='Let us now see a list of the Most popular Lynda Courses details that will help you to be a certified Professional. This list contains Top-rated Online Lynda Courses:'
         
          div1.append(div2,div3,div4,div5,div6)
          content1.append(div1);
  div1.addEventListener('click', function(){
    move(p)
  })
  function move(data){
    localStorage.setItem('H_data',JSON.stringify(data));
    window.location.href = "../html/ay_index.html"
  }
        })
    }


        var span5 = document.getElementById('span_5');
        var span6 = document.getElementById('span_6');
        // console.log(span)
        var div1 = document.getElementsByClassName('div1');
        var l = 0;
        span6.addEventListener('click', right1)
        function right1() {
        //   console.log('anny')
            l++;
            for (var i of div1) {
            //   console.log(i)
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l > 4) {
                    l = 4;
                }

            }
        }
        span5.addEventListener('click', left1)
        function left1() {
            l--;
            for (var i of div1) {
            //   console.log('abhi')
                if (l == 0) {
                    i.style.left = '0px';
                }
                if (l == 1) {
                    i.style.left = '-740px';
                }
                if (l == 2) {
                    i.style.left = '-1480px';
                }
                if (l == 3) {
                    i.style.left = '-2220px';
                }
                if (l == 4) {
                    i.style.left = '-2960px';
                }
                if (l < 0) {
                    l = 0;
                }

            }
        }
