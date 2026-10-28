const button = document.getElementById("theme");
button.addEventListener("click", function() {

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.innerText = "Dark Mode";
    } 
    else 
        {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.innerText = "Light Mode";
        }
});