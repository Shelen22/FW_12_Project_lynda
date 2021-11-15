let userId = Math.floor( Math.random()*999 ) + 100;
    


    async function signup(event) {
        event.preventDefault();

        let form = document.getElementById("myForm");

        let user_data = {
            name: `user${userId}`,
            email: form.email.value,
            password: form.password.value,
            username: form.username.value,
            mobile: `99${userId}8389`,
            description: `filler`
        }

        user_data = JSON.stringify(user_data);
        console.log(user_data);

        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method: "POST",
            body: user_data,
            headers: {
                "Content-Type": "application/json",
            },
        })

        res = await res.json();
        console.log(res);
        alert("Account created Successfully")

        window.location.href = '../html/signin.html';
    }