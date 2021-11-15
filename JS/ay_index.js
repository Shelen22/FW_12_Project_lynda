// let H_data ={
//         by: "By:shekhar",
//         date: "09th may 2018",
//         img: "https://www.incimages.com/uploaded_files/image/1920x1080/public-speaking-1940x900_35061.jpg",
//         link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
//         name: "Create and design your own first website "
//         price: 5999,
//         time: 4500
//         title: "REACT"
// }

// let data = [
//     {
//       title: "PYTHON",
//       name: "Python programming for beginners",
//       by: "By:Kethrin",
//       date: "19th September 2020",
//       video: "",
//       link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
//       time: 40,
//       price: 1500,
//       image:'1635784148148.jpeg'
//     }
// ]


// if(sessionStorage.getItem('course') == null){
//     sessionStorage.setItem('course',JSON.stringify([]))
// }
// var arr = JSON.parse(sessionStorage.getItem('course'))
// if(arr.length == 0){
//     arr.push(data[0]) 
//     sessionStorage.setItem('course',JSON.stringify(arr))
// }
var dis_data = []
var obj = JSON.parse(localStorage.getItem('H_data'))

// if(Array.isArray(obj)){
//     dis_data = obj
// }else{
//     dis_data.push(obj)
// }

dis_data.push(obj)
console.log(dis_data)
var local_title = dis_data[0].title
console.log('local title is '+local_title)

var parent = document.getElementById('imgdiv')

function showdata(){
    dis_data.forEach((el)=>{
        parent.style.backgroundImage = `linear-gradient(to left,rgba(255, 255, 255, 0.4),rgba(255,255,255,1)60%),url("${el.img}")`;  
        
        var title = document.createElement('h6')
        title.textContent = el.name

        var release = document.createElement('p');
        release.setAttribute("class","date")
        release.textContent = 'Beginner • 9m 30s • '+ el.date

        var head_detail = document.getElementById('head_detail')
        head_detail.append(title,release)

        var display_obj = {
            title: el.name,
            image: el.img,
            price: el.price,
            date: el.date,
            by:el.by
        }
        localStorage.setItem('displayed_data',JSON.stringify(display_obj))
    })
}
showdata()



//-suggest course database starts

var data_S = [
    {
        img:'1631727956532.jpg',
        title:'Be the Manager People Wont Leave',
        author:'Laurie ruettimann'
    },
    {
        img:'1635439114480.jpg',
        title:'AutoCAd: Construction Drawings',
        author:'Shaun Bryant'
    },
    {
        img:'1567195355168.jpg',
        title:'Building Resilience',
        author:'Tatiana Kolovou'
    },
    {
        img:'1593206299927.jpg',
        title:'Effective Listening',
        author:'Brenda Bailey-Hughes and Tatiana'
    },
    {
        img:'1593209064808.jpg',
        title:'Project Management Foundations',
        author:'Bonnie Biafore'
    },
    {
        img:'1575309411759.jpg',
        title:'Critical thinking for Better Judgement and Decision',
        author:'Becki Saltzman'
    },
]

var parent = document.getElementById('suggest_course')

data_S.forEach((el)=>{
    var main = document.createElement('div')

    var img_div = document.createElement('div')
    var img = document.createElement('img')
    img.src = `../images/${el.img}`
    img.style.width = '220px'
    img.style.height = '130px'
    img_div.append(img)

    var det_div = document.createElement('div')
    
    var h4 = document.createElement('h4')
    h4.textContent = el.title

    var p = document.createElement('p')
    p.textContent ='By: '+ el.author
   
    det_div.append( h4,p)

    main.append(img_div,det_div)
    parent.append(main)

})

var data_R = [
    {
        title:"PYTHON",
        introduction :['Learing Python','What you shoyl know','Exercise files'],
        Getting_Started:['Installing python','How to run the python examples','Installing VS Code','Chapter Quiz'],
        Basics:['Your first python program','Running Python frm VS Code','Variables and expressions','Python fuunctions'],
        Conclusions:['Next steps']
    },
    {
        title:'MS EXCEL',
        introduction:['Welcome','Using the exercise files'],
        Getting_Started:['Using the menu system','using the Quick Access Toolbar','Understanding workbooks and worksheets','Using the Formula bar','Using the Status Bar','Using navigation tools','using shortcutmenus and the Mini toolbar','Creating new workbooks','Using Excel Help'],
        Basics:['Entering data with Autofill','Working with dates and times','Using Undo and Redo','Adding comments','Using Save or Save As'],
        Conclusions:['Goodbye']
    },
    {
        title:'SQL',
        introduction:['Understanding SQL','How to use the exercise files','Course overview'],
        Getting_Started:['Database organization','The SELECT statement','Selecting rows','Selecting columns','Counting rows','Inserting data','Updating data','Deleting data'],
        Basics:['Creating a table','Deleting a table','Inserting rows','Deleting rows','The Null value','Constraing columns','Changing a schema','ID columns','Filtering data'],
        Conclusions:['Goodbye']
    },
    {
        title:'DJANGO',
        introduction:['Rapidly create web applications','what you should know','GitHub and exercise files'],
        Getting_Started:['what is Django','install Python and Django','Create a Django project','Create A  Django app'],
        Basics:['Understand URL patterns','Implement URL patterns','Implement Django views'],
        Conclusions:['Next steps']
    },
    {
        title:'MEDIA QUERIES',
        introduction:['Go cross-platform with responsive design','What you should know'],
        Getting_Started:['Viewpost','Required CSS','Display properly','Positioning','Floats','Units'],
        Basics:['intro to CSS Grid','Defining rows and columns','Grid gap','Sizing rows and columns','Placing grid items','Grid alignment overview','Aligning tracks','Aligning grid items within tracks','Aligning individual grid items'],
        Conclusions:['Next steps']
    },
    {
        title:'ASYNC',
        introduction:['impplementing smart asynchronous code','What you should know','Environment setup','Getting an OpenWetherMap API key'],
        Getting_Started:['Understanding what aysnchronous means','Defining asynchronous programming','Using callbacks in asynchronous programming','Implementing callbacks for problem-solving','Using error checking with multiple callbacks'],
        Basics:['Undesrtanding the async functions with await statements','Using statements to handle errors in async/await code','Making async/await code backward compatible with polyfill'],
        Conclusions:['Asynchronous coding experience']
    },
    {
        title:'Business Courses',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Teams',
        introduction:['Welcome to Essentials of team collaboration','why team collaboiration is necessary'],
        Getting_Started:['Develop team ground rules','Build relationships early and often','Identify team mmbers preferred communication mode','Tips for great online collaboration'],
        Basics:['Take periodoc tempertaure checks'],
        Conclusions:['Develop best practices to enhance team collaboration','Team collaboration challenge','Chapter Quiz']
    },
    {
        title:'Project Management',
        introduction:['Deliver successful projects','What you should know'],
        Getting_Started:['what is a project','what is project management','what it takes tobe a project manager','The project management life cycle','traditional vs agile project management'],
        Basics:['initiate a project','Identify project stakeholder','Analyze project stakeholders','Identify the project goal','Define project objectives','Choose a strategy','Gather requirements'],
        Conclusions:['goodbye']
    },
    {
        title:'Javascript',
        introduction:['JavaScript:The soil from which the modern web grows','How to use the exercise files','Navigating the JS landscape','Tools for working with JavaScript','Limiting and formatting'],
        Getting_Started:['Javascript ina an HTML document','JavaScript as an external file','Modern JavaScript loading','JavaScript modules'],
        Basics:['The real-worl function','Functions and methods','A standard function','The arow function','Arrow function'],
        Conclusions:['goodbye']
    },
    {
        title:'Spring',
        introduction:['Spring into Spring','What you should know','Chapter Quiz'],
        Getting_Started:['understanding Spring Boot dependencies','Configuring embedded Tomcat','Employing MVC in Spring Boot','Thymeleaf tempplates','Web application with Spring Boot','Challenge:Gernerate An MVC webpage','Solution:Generate an MVC webpage'],
        Basics:['Booting from the web','Understanding the project','Understanding auto-configuration','Configuration in Spring Boot','Spring Profiles in Boot','Building Spring Boot applications','Containerizing Spring Boot Applications'],
        Conclusions:['goodbye']
    },
    {
        title:'Deep Learning',
        introduction:['Welcome','What you should know','Using the excercise files'],
        Getting_Started:['Setting Up TensorFlow','Install TensorFlow on macOS','Install TensorFlow on Windows','Chapter Quiz'],
        Basics:['Tensor Flow Overview','what is TEnsorFLow','Why is it called tensorFlow','Hardware,software,and language requirements'],
        Conclusions:['Goodbye']
    },
    {
        title:'Finance',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Scrum',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Communicating with Confidence',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Time Management',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Strategic Thinking',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'DOCKERS',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'APTITUDE & REASONING',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'HTML & CSS',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Critical Thinking',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'AWS',
        introduction:['Lab overview,first look at python'],
        Getting_Started:['building the docker image'],
        Basics:['Working with Azure Container Registry (ACR)','Creating A GitHub Actions workflow'],
        Conclusions:['Running the workflow']
    },
    {
        title:'Developing Executive Presence',
        introduction:['Executive presence: The key differentiator','Chapter Quiz' ],
        Getting_Started:['Passion and positive difference','Inner presence before outer presence','Four factors of executive presence'],
        Basics:['thinking about others','Thinking about yourself','getting things done','Chapter Quiz'],
        Conclusions:['Emotional patterns','Being emotionally proactive','Shifting emotions','Chapter Quiz']
    },
    {
        title:'Git Essential Training',
        introduction:['Use Git version control software to manage project code'],
        Getting_Started:['version control','the history behind git','About distributed version control','Chapter quiz'],
        Basics:['The three trees','Git workflows','Hash values(SHA_1)','the HEAD pointer'],
        Conclusions:['goodbye']
    },
    {
        title:'Communicating with Confidence',
        introduction:['Executive presence: The key differentiator','Chapter Quiz' ],
        Getting_Started:['Passion and positive difference','Inner presence before outer presence','Four factors of executive presence'],
        Basics:['thinking about others','Thinking about yourself','getting things done','Chapter Quiz'],
        Conclusions:['Emotional patterns','Being emotionally proactive','Shifting emotions','Chapter Quiz']
    },
    {
        title:'Time Management',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'REACT',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'Strategic Thinking',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'DOCKERS',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'APTITUDE & REASONING',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'HTML & CSS',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'DSA',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'skills',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'C++',
        introduction:['Learn C++','Using the exercise files','What is C++','The structure of this course'],
        Getting_Started:['Introduction to basic syntax','Anatomy of a C++ program','Statements and expressions','Identifiers','Defining Variables','Pointers','References','Primitive arrays'],
        Basics:['Overview of data types','integer types','integer sizes','Fixed-size integers','Floating-point types','characters and strings'],
        Conclusions:['Goodbye']
    }


]

var parent_scroll = document.getElementById('scroll_box')

function showData_R(){
    data_R.forEach((el)=>{
        for( var i = 0 ; i < dis_data.length ; i++ ){
            if( el.title == dis_data[0].title ){

                var click = document.createElement('h4')
                click.textContent = '>'
                click.className = 'click'
                click.addEventListener('click',intro) 
                var h3_1 = document.createElement('h4')
                var div1_1 = document.createElement('div')
                var div1_2 = document.createElement('div')
                var div1_main = document.createElement('div')
                h3_1.textContent = '00.Introduction'
                div1_1.append(h3_1,click)
                div1_1.id = 'intro_div'
                div1_2.id = 'intro_cont' 
                div1_main.id  = 'intro_main'
                div1_main.append(div1_1,div1_2)
                

                
                var click = document.createElement('h4')
                click.textContent = '>'
                click.className = 'click'
                click.addEventListener('click',started)
                var h3_2  = document.createElement('h4')
                var div2_main = document.createElement('div')
                var div2_1 = document.createElement('div')
                var div2_2 = document.createElement('div')
                h3_2.textContent = '01.Getting Started'
                div2_1.append(h3_2,click)
                div2_1.id = 'getting_started_div'
                div2_2.id = 'getting_started_cont'
                div2_main.append(div2_1,div2_2)


                var click = document.createElement('h4')
                click.textContent = '>'
                click.className = 'click'
                click.addEventListener('click',basics)
                var h3_3  = document.createElement('h4')
                var div3_main = document.createElement('div')
                var div3_1 = document.createElement('div')
                var div3_2 = document.createElement('div')
                h3_3.textContent = '02.Basics'
                div3_1.append(h3_3,click)
                div3_1.id = 'Basics_div'
                div3_2.id = 'Basics_cont'
                div3_main.append(div3_1,div3_2)


                var click = document.createElement('h4')
                click.textContent = '>'
                click.className = 'click'
                click.addEventListener('click',con)
                var h3_4  = document.createElement('h4')
                var div4_main = document.createElement('div')
                var div4_1 = document.createElement('div')
                var div4_2 = document.createElement('div')
                h3_4.textContent = '03.Conclusions'
                div4_1.append(h3_4,click)
                div4_1.id = 'Conclusions_div'
                div4_2.id = 'Coclusion_cont'
                div4_main.append(div4_1,div4_2)

                parent_scroll.append(div1_main,div2_main,div3_main,div4_main)


                var flag_intro = true
            function intro(){
                
                    if(flag_intro){
                        flag_intro = false

                        document.getElementById('intro_cont').style.display = 'block'
                        
                        var intro_cont_div = document.getElementById('intro_cont')
                        intro_cont_div.innerHTML = null
                        var ul = document.createElement('ul') 
                        ul.style.listStyle = 'circle' 

                        // for( var i = 0 ; i < data_R[0].introduction.length ; i++){
                        data_R.forEach((el)=>{
                            if(el.title == local_title){
                                for(var i = 0 ; i < el.introduction.length ; i++){
                                    var li = document.createElement('li')
                                    li.textContent = el.introduction[i]
                                    ul.append(li)
                                    intro_cont_div.append(ul)   
                                }     
                            }
                        })
                    
                        // }
                    }else{
                        document.getElementById('intro_cont').style.display = 'none'
                        flag_intro = true
                    }
                }
                        }
                    }
            
                    
                    var flag_started = true
                    function started(){
                        // console.log('strated triggerd')
                        if(flag_started){
                            flag_started = false
                    
                            document.getElementById('getting_started_cont').style.display = 'block'
                    
                            var started_cont_div = document.getElementById('getting_started_cont')
                            started_cont_div.innerHTML = null
                            var ul = document.createElement('ul') 
                            ul.style.listStyle = 'circle' 
                    
                            data_R.forEach((el)=>{
                                if(el.title == local_title){
                                    for(var i = 0 ; i < el.Getting_Started.length ; i++){
                                        var li = document.createElement('li')
                                        li.textContent = el.Getting_Started[i]
                                        ul.append(li)
                                        started_cont_div.append(ul)   
                                    }     
                                }
                            })

                        }else{
                            document.getElementById('getting_started_cont').style.display = 'none'
                            flag_started = true
                        }
                    }


                    var flag_basics = true
                    function basics(){
                        // console.log('basics triggerd')
                        if(flag_basics){
                            flag_basics = false
                    
                            document.getElementById('Basics_cont').style.display = 'block'
                    
                            var basics_cont_div = document.getElementById('Basics_cont')
                            basics_cont_div.innerHTML = null
                            var ul = document.createElement('ul') 
                            ul.style.listStyle = 'circle' 

                           data_R.forEach((el)=>{
                               if(el.title == local_title){
                                for( var i = 0 ; i < el.Basics.length ; i++){
                                    var li = document.createElement('li')
                                    li.textContent = el.Basics[i]
                                    ul.append(li)
                                    basics_cont_div.append(ul)
                                }
                               }
                           })
                    
                        }else{
                            document.getElementById('Basics_cont').style.display = 'none'
                            flag_basics = true
                        }
                    }

                    var flag_con = true
                    function con(){
                        // console.log('conclude triggerd')
                        if(flag_con){
                    
                            flag_con = false
                            document.getElementById('Coclusion_cont').style.display = 'block'
                    
                                var conclude_cont_div = document.getElementById('Coclusion_cont')
                                conclude_cont_div.innerHTML = null
                                var ul = document.createElement('ul') 
                                ul.style.listStyle = 'circle' 

                                data_R.forEach((el)=>{
                                    if(el.title == local_title){
                                        for( var i = 0 ; i < el.Conclusions.length ; i++){
                                            var li = document.createElement('li')        
                                            li.textContent = el.Conclusions[i]
                                            ul.append(li)
                                            conclude_cont_div.append(ul)
                                        }
                                    }
                                })
                            
                        }else{
                            document.getElementById('Coclusion_cont').style.display = 'none'
                            flag_con = true
                        }
                    }
                    
                    
    })
    dis_data = []
}

showData_R()



// var flag_con = true
// function con(){
//     // console.log('conclude triggerd')
//     if(flag_con){

//         flag_con = false
//         document.getElementById('Coclusion_cont').style.display = 'block'

//             var conclude_cont_div = document.getElementById('Coclusion_cont')
//             conclude_cont_div.innerHTML = null
//             var ul = document.createElement('ul') 
//             ul.style.listStyle = 'circle' 

//         for( var i = 0 ; i < data_R[0].Conclusions.length ; i++){
//             var li = document.createElement('li')        
//             li.textContent = data_R[0].Conclusions[i]
//             ul.append(li)
//             conclude_cont_div.append(ul)
//         }
//     }else{
//         document.getElementById('Coclusion_cont').style.display = 'none'
//         flag_con = true
//     }
// }

// related course scripts + database starts here--------

var data_related = [
    {   
        head:'COURSE',
        img:'1626197364567.jpg',
        title:'UX DesignOps overview',
    },
    {
        head:'COURSE',
        img:'1629490820278.jpg',
        title:'Sketching for UX Designers',
    },
    {
        head:'COURSE',
        img:'1567117744465.jpg',
        title:'UX Foundations: Style Guides and Design',
    },
    {
        head:'COURSE',
        img:'1597779745650.jpg',
        title:'User Experience (UX) for Non-Designers',
    },
    {
        head:'COURSE',
        img:'1629497577555.jpg',
        title:'UX Foundations Interactions Design',
    }
]

var parent_related_box = document.getElementById('related_box')

data_related.forEach((el)=>{
    var main = document.createElement('div')

    var img_div = document.createElement('div')
    var img = document.createElement('img')
    img.src = `../images/${el.img}`
    img.style.width = '158px'
    img.style.height = '92px'
    
    img_div.append(img)

    var det_div = document.createElement('div')
    
    var h4 = document.createElement('h4')
    h4.textContent = el.head
    h4.className = 'zero_margin'

    var p = document.createElement('p')
    p.textContent = el.title
   
    // var hr = document.createElement('hr')
    det_div.append( h4,p)

   
    
    main.append(img_div,det_div)
    parent_related_box.append(main)

})










// buy the course function starts frm here ---------

document.getElementById('whitebox').addEventListener('click',buy)

function buy(){
    console.log('buy course triggered ')
    window.location.href = "../html/checkout.html"

}

document.getElementById('bluebox').addEventListener('click',free)

function free(){
    window.location.href = "../html/checkoutfree.html"
}