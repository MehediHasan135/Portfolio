window.onload = function () {

    const toggleBtn = document.querySelector(".togglebtn");
    const nav = document.querySelector(".navlinks");
    const navLinks = document.querySelectorAll(".navlinks li");

    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("click");
        nav.classList.toggle("open");
    });

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

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggleBtn.classList.remove("click");
            nav.classList.remove("open");
        });
    });
};
