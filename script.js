function checkPassword(event) {
    event.preventDefault(); // Stop the default link action
    const password = prompt("Enter password:");
    if (password === "xxxsite") {
        // Redirect to the link's href
        window.location.href = event.currentTarget.getAttribute("href");
    } else {
        alert("Wrong password!");
    }
}

let gate = document.querySelector("#gate")
gate.addEventListener("click", gtentry)
function gtentry(){
    const pass = "kaushik"
    const pwd = prompt("Enter Password to Proceed")
    if (pwd === pass){
        window.location.href = "./study.html"
    }
    else {
        alert("Wrong password!");
    }
}