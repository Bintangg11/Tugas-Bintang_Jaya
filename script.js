const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }

});


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });

});


document.getElementById("year").textContent =
    new Date().getFullYear();