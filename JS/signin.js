async function login(e) {
    e.preventDefault();

    let pass = document.getElementById('pass');
    let em = document.getElementById('em');
    if((em.value.length&&pass.value.length)==0){
        alert("Please Enter login details");
    }

    let user_data = {
        username: em.value,
        password: pass.value
    }

    let data = JSON.stringify(user_data);
    // console.log(data);
    // amit

    let res = await fetch("https://lynda-learning.herokuapp.com/login/data/login", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    })

    res = await res.json();
    // console.log(res);

    let token = res.token;
    // console.log('token:', token)
    let username = res.user.username


    if(username){
        localStorage.setItem("user", JSON.stringify({username,token}));
        window.location.href = "index.html";
       }
   else {
       alert('invalid login credentials');
   }

    // fetchmyData(user_data.username,token);
}


