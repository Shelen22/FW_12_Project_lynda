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
    console.log(data);
    // amit

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    })

    res = await res.json();
    console.log(res);

    let token = res.token;
    fetchmyData(user_data.username,token);
}

function fetchmyData(username, token) {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log("res:", res);
            if(res.name){
                 localStorage.setItem("user", JSON.stringify(res.username));
                 window.location.href = "index.html";
                }
            else {
                alert('invalid login credentials');
            }
        })
        .catch((err) => {
            console.log("err:", err);
        })
}