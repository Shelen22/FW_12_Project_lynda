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
// console.log(dis_data)
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



async function db1(){
    let res = await fetch("http://localhost:2244/data_R")
    var data_R = await res.json();
    console.log('data_R:', data_R)

    datas(data_R)
}
db1()

var parent = document.getElementById('suggest_course')

function datas(data_R){
data_R.forEach((el)=>{
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
}




var parent_scroll = document.getElementById('scroll_box')

async function db2(){
    let res = await fetch("http://localhost:2244/data_S")
    var data_S = await res.json()
    console.log('data_S:', data_S)

    showData_R(data_S)
}
    db2()

function showData_R(data_S){
    data_S.forEach((el)=>{
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
                        data_S.forEach((el)=>{
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
                    
                            data_S.forEach((el)=>{
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
                      
                        if(flag_basics){
                            flag_basics = false
                    
                            document.getElementById('Basics_cont').style.display = 'block'
                    
                            var basics_cont_div = document.getElementById('Basics_cont')
                            basics_cont_div.innerHTML = null
                            var ul = document.createElement('ul') 
                            ul.style.listStyle = 'circle' 

                           data_S.forEach((el)=>{
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

                                data_S.forEach((el)=>{
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