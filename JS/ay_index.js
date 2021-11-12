let data = [
    {
      title: "PYTHON",
      name: "Python programming for beginners",
      by: "By:Kethrin",
      date: "19th September 2020",
      video: "",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
      time: 40,
      price: 1500,
      image:'1635784148148.jpeg'
    }
]


if(sessionStorage.getItem('course') == null){
    sessionStorage.setItem('course',JSON.stringify([]))
}
var arr = JSON.parse(sessionStorage.getItem('course'))
if(arr.length == 0){
    arr.push(data[0]) 
    sessionStorage.setItem('course',JSON.stringify(arr))
}

var dis_data = JSON.parse(sessionStorage.getItem('course'))
console.log(dis_data)

var parent = document.getElementById('imgdiv')

function showdata(){
    dis_data.forEach((el)=>{
        parent.style.backgroundImage = `linear-gradient(to left,rgba(255, 255, 255, 0.4),rgba(255,255,255,1)60%),url(images/${el.image})`  
        
        var title = document.createElement('h4')
        title.textContent = el.name

        var release = document.createElement('p');
        release.setAttribute("class","date")
        release.textContent = 'Beginner • 9m 30s • '+ el.date

        var head_detail = document.getElementById('head_detail')
        head_detail.append(title,release)
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
    img.src = `images/${el.img}`
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
        title:'MS Excel',
        introduction:['Welcome','Using the exercise files'],
        Getting_Started:['Using the menu system','using the Quick Access Toolbar','Understanding workbooks and worksheets','Using the Formula bar','Using the Status Bar','Using navigation tools','using shortcutmenus and the Mini toolbar','Creating new workbooks','Using Excel Help'],
        Basics:['Entering data with Autofill','Working with dates and times','Using Undo and Redo','Adding comments','Using Save or Save As'],
        Conclusions:['Goodbye']
    },
    {
        title:'Sql',
        introduction:['Understanding SQL','How to use the exercise files','Course overview'],
        Getting_Started:['Database organization','The SELECT statement','Selecting rows','Selecting columns','Counting rows','Inserting data','Updating data','Deleting data'],
        Basics:['Creating a table','Deleting a table','Inserting rows','Deleting rows','The Null value','Constraing columns','Changing a schema','ID columns','Filtering data'],
        Conclusions:['Goodbye']
    },
    {
        title:'Django',
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
        title:'Async',
        introduction:['impplementing smart asynchronous code','What you should know','Environment setup','Getting an OpenWetherMap API key'],
        Getting_Started:['Understanding what aysnchronous means','Defining asynchronous programming','Using callbacks in asynchronous programming','Implementing callbacks for problem-solving','Using error checking with multiple callbacks'],
        Basics:['Undesrtanding the async functions with await statements','Using statements to handle errors in async/await code','Making async/await code backward compatible with polyfill'],
        Conclusions:['Asynchronous coding experience']
    },
   
]

var parent_scroll = document.getElementById('scroll_box')

function showData_R(){
    data_R.forEach((el)=>{
        for( var i = 0 ; i < data.length ; i++ ){
            if( el.title == data[i].title ){

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

            }
        }
    })
}

showData_R()


function intro(){
    // console.log('intro triggered')
        var intro_cont_div = document.getElementById('intro_cont')
        intro_cont_div.innerHTML = null
        var ul = document.createElement('ul') 
        ul.style.listStyle = 'circle' 

        for( var i = 0 ; i < data_R[0].introduction.length ; i++){
        var li = document.createElement('li')
        li.textContent = data_R[0].introduction[i]
        ul.append(li)
        intro_cont_div.append(ul)
        }
}

function started(){
    console.log('strated triggerd')
    var started_cont_div = document.getElementById('getting_started_cont')
    started_cont_div.innerHTML = null
    var ul = document.createElement('ul') 
    ul.style.listStyle = 'circle' 

    for( var i = 0 ; i < data_R[0].Getting_Started.length ; i++){
        var li = document.createElement('li')
        li.textContent = data_R[0].Getting_Started[i]
        ul.append(li)
        started_cont_div.append(ul)
    }
}

function basics(){
    console.log('basics triggerd')
    var basics_cont_div = document.getElementById('Basics_cont')
    basics_cont_div.innerHTML = null
    var ul = document.createElement('ul') 
    ul.style.listStyle = 'circle' 

    for( var i = 0 ; i < data_R[0].Basics.length ; i++){
        var li = document.createElement('li')
        li.textContent = data_R[0].Basics[i]
        ul.append(li)
        basics_cont_div.append(ul)
    }
}

function con(){
    console.log('conclude triggerd')
    var conclude_cont_div = document.getElementById('Coclusion_cont')
    conclude_cont_div.innerHTML = null
    var ul = document.createElement('ul') 
    ul.style.listStyle = 'circle' 

    for( var i = 0 ; i < data_R[0].Conclusions.length ; i++){
        var li = document.createElement('li')        
        li.textContent = data_R[0].Conclusions[i]
        ul.append(li)
        conclude_cont_div.append(ul)
    }
}

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
    img.src = `images/${el.img}`
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
}