
          let products = [
    {
      title: "PYTHON",
      name: "Python programming for beginers",
      by: "By:Kethrin",
      date: "19th September 2020",
      img: "https://www.incimages.com/uploaded_files/image/1920x1080/public-speaking-1940x900_35061.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
      time: 40,
      price: 1500,
    },
    {
      title: "MS EXCEL",
      name: "MS excel beginer to advance",
      by: "By:shekher",
      date: "19th August 2021",
      img: "https://image.shutterstock.com/image-vector/online-education-educational-webinar-home-260nw-1875251122.jpg",
      link: "https://www.javatpoint.com/excel-tutorial",
      time: 4000,
      price: 400,
    },
    {
      title: "SQL",
      name: "Be an expert in sql",
      by: "By:Saroj yadav",
      date: "03th july 2021",
      img: "https://intellipaat.com/mediaFiles/2015/11/SQL-e1559106221282.png",
      link: "https://www.simplilearn.com/tutorials/sql-tutorial/sql-advanced",
      time: 100,
      price: 6000,
    },
    {
      title: "DJANGO",
      name: "Django framework for intermidiate",
      by: "By:Paul Johnson",
      date: "19th March 2017",
      img: "https://miro.medium.com/max/1200/1*ctRMfb38pEMBx-Q7XZAQkQ.jpeg",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 300,
      price: 3999,
    },
    {
      title: "MEDIA QUERIES",
      name: "Create responsive pages using css media queries",
      by: "By:Ashish Mehra",
      date: "04th june 2019",
      img: "https://i.ytimg.com/vi/HY8q4TD3KGM/maxresdefault.jpg",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 123,
      price: 399,
    },
    {
      title: "ASYNC",
      name: "Learn promies be expert in async and awaits ",
      by: "By:Shivani Chaudhari",
      date: "01th January 2018",
      img: "https://image.shutterstock.com/image-vector/asynchronous-learning-concept-icon-location-260nw-1832025757.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
      time: 320,
      price: 490,
    },
    {
      title: "LEARN FIGMA",
      name: "Create and design your own figma based website ",
      by: "By:Tejasvi Singh",
      date: "09th april 2013",
      img: "https://miro.medium.com/max/1200/0*o5oUDM7g3T7wswtW.jpg",
      link: "https://mockitt.wondershare.com/figma/figma-tutorial.html",
      time: 600,
      price: 999,
    },
    {
      title: "REACT",
      name: "Create and design your own first website ",
      by: "By:shekhar",
      date: "09th may 2018",
      img: "https://miro.medium.com/max/1024/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
      time: 4500,
      price: 5999,
    },
    {
      title: "DSA",
      name: "Be a pro in data structures and algorithms",
      by: "By:Abdul Bari",
      date: "09th october 2020",
      img: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1621544627000/photosp/5ba7131d-4c92-47d2-878a-8afc6c74a918/stock-photo-education-text-handmade-logo-psychology-acronym-dsa-colored-letters-stone-letters-5ba7131d-4c92-47d2-878a-8afc6c74a918.jpg",
      link: "https://www.geeksforgeeks.org/data-structures/",
      time: 8000,
      price: 10000,
    },
    {
      title: "DOCKERS",
      name: "Docker for develpers ",
      by: "By:Peter Dakota ",
      date: "28th February 2020",
      img: "https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP",
      link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
      time: 3000,
      price: 9550,
    },
    {
      title: "APTITUDE & REASONING ",
      name: "Learn aptitude and reasoning to crack the GATE ",
      by: "By:Swastika Mukharjee",
      date: "09th may 2018",
      img: "https://image.shutterstock.com/image-vector/capabilities-human-brain-mind-map-260nw-236140372.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
      time: 780,
      price: 450,
    },
    {
      title: "HTML & CSS",
      name: "create atractive ui by using html and css ",
      by: "By:Viraat sharma",
      date: "21th Februay 2014",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      time: 788,
      price: 900,
    },
  ];
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
        var span7 = document.getElementById('span_7');
        var span8 = document.getElementById('span_8');
        // console.log(span)
        var div4 = document.getElementsByClassName('div4');
        var l = 0;
        span8.addEventListener('click', right4)
        function right4() {
          console.log('anny')
            l++;
            for (var i of div4) {
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
        span7.addEventListener('click', left4)
        function left4() {
            l--;
            for (var i of div4) {
              console.log('abhi')
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

        let products3 = [
  {
      title: "skills",
      name: "Enhance Your Tech Skills",
      by: "By:Kethrin",
      date: "19th September 2020",
      img: "https://miro.medium.com/max/1200/1*4OPyDBJ6EirxQzAzRRbAmA.jpeg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
      time: 40,
      price: 1500,
  },
  {
      title: "Business Courses",
      name: "Online Business Courses",
      by: "By:shekher",
      date: "19th August 2021",
      img: "https://thumbs.dreamstime.com/z/group-business-people-learning-social-media-46666293.jpg",
      link: "https://www.javatpoint.com/excel-tutorial",
      time: 4000,
      price: 400,
  },
  {
      title: "Teams",
      name: "Training For Teams",
      by: "By:Saroj yadav",
      date: "03th july 2021",
      img: "https://image.shutterstock.com/image-photo/team-corporate-teamwork-collaboration-assistance-260nw-410505169.jpg",
      link: "https://www.simplilearn.com/tutorials/sql-tutorial/sql-advanced",
      time: 100,
      price: 6000,
  },
  {
      title: "Project Management",
      name: "Project Management Foundations",
      by: "By:Paul Johnson",
      date: "19th March 2017",
      img: "https://cdn.corporatefinanceinstitute.com/assets/project-management.jpeg",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 300,
      price: 3999,
  },
  {
      title: " Javascript",
      name: " JavaScript Essential Training",
      by: "By:Ashish Mehra",
      date: "04th june 2019",
      img: "https://static.javatpoint.com/images/javascript/javascript_logo.png",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 123,
      price: 399,
  },
  {
      title: "Leaders",
      name: " Body Language for Leaders",
      by: "By:Shivani Chaudhari",
      date: "01th January 2018",
      img: "https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-475636790_165141.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
      time: 320,
      price: 490,
  },
  {
      title: "HTML",
      name: " HTML Essential Training",
      by: "By:Tejasvi Singh",
      date: "09th april 2013",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203170945/HTML-Tutorials.png",
      link: "https://mockitt.wondershare.com/figma/figma-tutorial.html",
      time: 600,
      price: 999,
  },
  {
      title: "REACT",
      name: "Create and design your own first website ",
      by: "By:shekhar",
      date: "09th may 2018",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
      time: 4500,
      price: 5999,
  },
  {
      title: "DSA",
      name: "Be a pro in data structures and algorithms",
      by: "By:Abdul Bari",
      date: "09th october 2020",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--AO0dFdQ5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/srnvrd7vfeeq5qpxnabq.png",
      link: "https://www.geeksforgeeks.org/data-structures/",
      time: 8000,
      price: 10000,
  },
  {
      title: "DOCKERS",
      name: "Docker for develpers ",
      by: "By:Peter Dakota ",
      date: "28th February 2020",
      img: "https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP",
      link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
      time: 3000,
      price: 9550,
  },
  {
      title: "APTITUDE & REASONING ",
      name: "Learn aptitude and reasoning to crack the GATE ",
      by: "By:Swastika Mukharjee",
      date: "09th may 2018",
      img: "https://free.indialearningpoint.com/wp-content/uploads/2020/07/o8.png",
      link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
      time: 780,
      price: 450,
  },
  {
      title: "HTML & CSS",
      name: "create atractive ui by using html and css ",
      by: "By:Viraat sharma",
      date: "21th Februay 2014",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      time: 788,
      price: 900,
  },
];
        products3.forEach(function (p) {
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
        var span1 = document.getElementById('span_1');
        var span2 = document.getElementById('span_2');
        var div3 = document.getElementsByClassName('div3');
        var l = 0;
        span2.addEventListener('click', right3)
        function right3() {
            // console.log('anny')
            console.log(div3)
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

        
        let products2 = [
  {
      title: "PYTHON",
      name: "Learn Python Programming Masterclass",
      by: "By:Kethrin",
      date: "19th September 2020",
      img: "https://miro.medium.com/max/840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
      time: 40,
      price: 1500,
  },
  {
      title: "Spring",
      name: "Spring & Hibernate for Beginners (includes Spring Boot)",
      by: "By:shekher",
      date: "19th August 2021",
      img: "https://top10onlinecourses.com/wp-content/uploads/2019/01/Spring-Online-Courses-Training-with-Certification.png",
      link: "https://www.javatpoint.com/excel-tutorial",
      time: 4000,
      price: 400,
  },
  {
      title: "Deep Learning",
      name: "Deep Learning A-Z™: Hands-On Artificial Neural Networks",
      by: "By:Saroj yadav",
      date: "03th july 2021",
      img: "https://online.stanford.edu/sites/default/files/styles/figure_default/public/2018-06/computer-science-deep-learning_CS230.jpg?itok=N1p1SKlh",
      link: "https://www.simplilearn.com/tutorials/sql-tutorial/sql-advanced",
      time: 100,
      price: 6000,
  },
  {
      title: "Finance",
      name: "The Complete Financial Analyst Course 2021",
      by: "By:Paul Johnson",
      date: "19th March 2017",
      img: "https://www.proschoolonline.com/wp-content/uploads/2018/05/finance63-300x136.jpg",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 300,
      price: 3999,
  },
  {
      title: "Scrum",
      name: "If you've spent any time in the project management world, you've likely heard of ",
      by: "By:Ashish Mehra",
      date: "04th june 2019",
      img: "https://miro.medium.com/max/533/0*p5Or7ISfr_dlO6UX.png",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 123,
      price: 399,
  },
  {
      title: "Communicating with Confidence",
      name: "Most people are afraid of speaking in public, but effective oral communication is a key skill in business. ",
      by: "By:Shivani Chaudhari",
      date: "01th January 2018",
      img: "https://wompampsupport.azureedge.net/fetchimage?siteId=7783&url=https%3A%2F%2Fspie.org%2FImages%2FGraphics%2FPhotonics%2520Focus%2Fv1_iss4%2F6_Communicating%2520with%2520Confidence-920.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
      time: 320,
      price: 490,
  },
  {
      title: "Time Management",
      name: "Time Management Fundamentals",
      by: "By:Tejasvi Singh",
      date: "09th april 2013",
      img: "https://i.ytimg.com/vi/R6wOxVBlddM/maxresdefault.jpg",
      link: "https://mockitt.wondershare.com/figma/figma-tutorial.html",
      time: 600,
      price: 999,
  },
  {
      title: "REACT",
      name: "Create and design your own first website ",
      by: "By:shekhar",
      date: "09th may 2018",
      img: "https://www.incimages.com/uploaded_files/image/1920x1080/public-speaking-1940x900_35061.jpg",
      link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
      time: 4500,
      price: 5999,
  },
  {
      title: "Strategic Thinking",
      name: "Strategic thinking is the ability to think on a big and small scale",
      by: "By:Abdul Bari",
      date: "09th october 2020",
      img: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/strategy%20and%20corporate%20finance/our%20insights/the%20strategy%20and%20corporate%20finance%20blog/how%20to%20unleash%20your%20strategic%20thinking/4rules-linkedin.png",
      link: "https://www.geeksforgeeks.org/data-structures/",
      time: 8000,
      price: 10000,
  },
  {
      title: "DOCKERS",
      name: "Docker for develpers ",
      by: "By:Peter Dakota ",
      date: "28th February 2020",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--AO0dFdQ5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/srnvrd7vfeeq5qpxnabq.png",
      link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
      time: 3000,
      price: 9550,
  },
  {
      title: "APTITUDE & REASONING ",
      name: "Learn aptitude and reasoning to crack the GATE ",
      by: "By:Swastika Mukharjee",
      date: "09th may 2018",
      img: "https://free.indialearningpoint.com/wp-content/uploads/2020/07/o8.png",
      link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
      time: 780,
      price: 450,
  },
  {
      title: "HTML & CSS",
      name: "create atractive ui by using html and css ",
      by: "By:Viraat sharma",
      date: "21th Februay 2014",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      time: 788,
      price: 900,
  },
];
        products2.forEach(function (p) {
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
                console.log('abc')
                console.log('abhi')
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

        let products1 = [
  {
      title: " Critical Thinking",
      name: "Critical thinking is the ability to think reflectively and independently in order to make thoughtful decisions",
      by: "By:Kethrin",
      date: "19th September 2020",
      img: "https://media.proprofs.com/images/QM/user_images/1826446/1624028069.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
      time: 40,
      price: 1500,
  },
  {
      title: "AWS",
      name: " Amazon Web Services Essential Training",
      by: "By:shekher",
      date: "19th August 2021",
      img: "https://miro.medium.com/max/1364/0*2ui893KAwAT_F9wz.gif",
      link: "https://www.javatpoint.com/excel-tutorial",
      time: 4000,
      price: 400,
  },
  {
      title: "Developing Executive Presence",
      name: "Learn to project self-confidence, clarity, and credibility even under conditions of stress, pressure, and uncertainty.",
      by: "By:Saroj yadav",
      date: "03th july 2021",
      img: "https://careeradvancementblog.com/wp-content/uploads/2014/08/5-Ways-to-Develop-Executive-Presence-1.jpg",
      link: "https://www.simplilearn.com/tutorials/sql-tutorial/sql-advanced",
      time: 100,
      price: 6000,
  },
  {
      title: "Git Essential Training",
      name: "Learn how to use Git, the popular open-source version control software, to manage the source code for almost any project.",
      by: "By:Paul Johnson",
      date: "19th March 2017",
      img: "https://cdn.lynda.com/course/5030978/5030978-1592866721316-16x9.jpg",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 300,
      price: 3999,
  },
  {
      title: "Scrum",
      name: "If you've spent any time in the project management world, you've likely heard of scrum—the popular framework for managing complex processes.",
      by: "By:Ashish Mehra",
      date: "04th june 2019",
      img: "https://miro.medium.com/max/533/0*p5Or7ISfr_dlO6UX.png",
      link: "https://docs.djangoproject.com/en/3.2/",
      time: 123,
      price: 399,
  },
  {
      title: "Communicating with Confidence",
      name: "Most people are afraid of speaking in public, but effective oral communication is a key skill in business. ",
      by: "By:Shivani Chaudhari",
      date: "01th January 2018",
      img: "https://wompampsupport.azureedge.net/fetchimage?siteId=7783&url=https%3A%2F%2Fspie.org%2FImages%2FGraphics%2FPhotonics%2520Focus%2Fv1_iss4%2F6_Communicating%2520with%2520Confidence-920.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
      time: 320,
      price: 490,
  },
  {
      title: "Time Management",
      name: "Time Management Fundamentals",
      by: "By:Tejasvi Singh",
      date: "09th april 2013",
      img: "https://i.ytimg.com/vi/R6wOxVBlddM/maxresdefault.jpg",
      link: "https://mockitt.wondershare.com/figma/figma-tutorial.html",
      time: 600,
      price: 999,
  },
  {
      title: "REACT",
      name: "Create and design your own first website ",
      by: "By:shekhar",
      date: "09th may 2018",
      img: "https://www.incimages.com/uploaded_files/image/1920x1080/public-speaking-1940x900_35061.jpg",
      link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
      time: 4500,
      price: 5999,
  },
  {
      title: "Strategic Thinking",
      name: "Strategic thinking is the ability to think on a big and small scale",
      by: "By:Abdul Bari",
      date: "09th october 2020",
      img: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/strategy%20and%20corporate%20finance/our%20insights/the%20strategy%20and%20corporate%20finance%20blog/how%20to%20unleash%20your%20strategic%20thinking/4rules-linkedin.png",
      link: "https://www.geeksforgeeks.org/data-structures/",
      time: 8000,
      price: 10000,
  },
  {
    title: "DOCKERS",
    name: "Docker for develpers ",
    by: "By:Peter Dakota ",
    date: "28th February 2020",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--AO0dFdQ5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/srnvrd7vfeeq5qpxnabq.png",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
    time: 3000,
    price: 9550,
},
{
    title: "APTITUDE & REASONING ",
    name: "Learn aptitude and reasoning to crack the GATE ",
    by: "By:Swastika Mukharjee",
    date: "09th may 2018",
    img: "https://free.indialearningpoint.com/wp-content/uploads/2020/07/o8.png",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
    time: 780,
    price: 450,
},
{
    title: "HTML & CSS",
    name: "create atractive ui by using html and css ",
    by: "By:Viraat sharma",
    date: "21th Februay 2014",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    time: 788,
    price: 900,
},
];
        products1.forEach(function(p){
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
    window.location.href ='../html/ay_index.html'
  }
        })
        var span5 = document.getElementById('span_5');
        var span6 = document.getElementById('span_6');
        // console.log(span)
        var div1 = document.getElementsByClassName('div1');
        var l = 0;
        span6.addEventListener('click', right1)
        function right1() {
          console.log('anny')
            l++;
            for (var i of div1) {
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
        span5.addEventListener('click', left1)
        function left1() {
            l--;
            for (var i of div1) {
              console.log('abhi')
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