// Wait for page to fully load before running scripts
window.onload = function () {
    // Select DOM elements
    const toggleBtn = document.querySelector(".togglebtn");
    const nav = document.querySelector(".navlinks");
    const navLinks = document.querySelectorAll(".navlinks li");

    // Toggle nav open/close when button is clicked
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("click");
        nav.classList.toggle("open");
    });

    // Typed.js animation
    var typed = new Typed(".input", {
        strings: [
            "Learning Web Dev",
            "Coding in Python",
            "C++ & Java"
        ]
        ,
        typeSpeed: 70,
        backSpeed: 55,
        loop: true,
        backDelay: 1000,
        showCursor: true,
    });

    // Optional: Close menu when a link is clicked (useful for mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggleBtn.classList.remove("click");
            nav.classList.remove("open");
        });
    });
};
