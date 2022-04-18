let elHeader = document.querySelector(".header__list");
let elBtn = document.querySelector(".header__menu");

elBtn.addEventListener("click", function() {
    if (!elHeader.matches(".header__list-open")) {
        elHeader.classList.add("header__list-open");
    } else {
        elHeader.classList.remove("header__list-open");
    }
})
