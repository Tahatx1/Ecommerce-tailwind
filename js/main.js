const nav = document.getElementById("mob-nav");
const toggle = document.getElementById("toggle-icon");


toggle.addEventListener(
    'click' ,
    () => {
        nav.classList.toggle("hidden");
    }
);