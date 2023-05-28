document.getElementById("logintoggle").addEventListener("click", function () {
    document.querySelector("#register").setAttribute("style", "display:none")
    document.querySelector("#login").setAttribute("style", "display:block")


})

document.getElementById("registertoggle").addEventListener("click", function () {
    document.querySelector("#login").setAttribute("style", "display:none")
    document.querySelector("#register").setAttribute("style", "display:block")


})

//signup

function registeruser(e){
    e.preventDefault()

    console.log("fhjd")
    let signupname = document.getElementById("signupname").value
    let signupemail = document.getElementById("signupemail").value
    let signuppassword = document.getElementById("signuppassword").value

    fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({  name:signupname, email: signupemail,  password:signuppassword })
    }).then((res) => res.json())
        .then((res) => {
            console.log(res)
            alert("user registered successfully")
        }).catch((err) => console.log(err))


        return false
}

// document.getElementById("signup").addEventListener("submit", function (e) {
   

//     console.log(signupemail,signupname,signuppassword)
//     registeruser(signupemail,signupname,signuppassword)

//     return false

    
// })




//login
document.getElementById("loginbutton").addEventListener("submit", function (e) {
    e.preventDefault()
    let loginemail = document.getElementById("loginemail").value
    let loginpassword = document.getElementById("loginpassword").value

    console.log(loginemail, loginpassword)

    if (loginemail === "eve.holt@reqres.in") {
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: loginemail, password: loginpassword })
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
            }).catch((err) => console.log(err))
    } else {
        fetch("http://localhost:8080/users")
            .then((res) => res.json())
            .then((res) => {
                let user = res.find((el) => el.email === loginemail && el.password === loginpassword)
                if (user) {
                    alert("login successful")
                    window.location.href = "hotels.html"
                }
            }).catch((err) => console.log(err))
    }
})





