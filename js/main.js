let elHeader = document.querySelector(".header__list");
let elBtn = document.querySelector(".header__menu");

elBtn.addEventListener("click", function() {
    elHeader.classList.toggle("header__list-open")
})
