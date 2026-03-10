function checkPassword(event) {
    event.preventDefault(); // Stop the default link action
    const password = prompt("Enter password:");
    if (password === "mypassword") {
        // Redirect to the link's href
        window.location.href = event.currentTarget.getAttribute("href");
    } else {
        alert("Wrong password!");
    }
}