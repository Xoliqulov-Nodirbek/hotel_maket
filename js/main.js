// --------- > header

let elHeader = document.querySelector(".header__list");
let elBtn = document.querySelector(".header__menu");

elBtn.addEventListener("click", function() {
    if (!elHeader.matches(".header__list-open")) {
        elHeader.classList.add("header__list-open");
    } else {
        elHeader.classList.remove("header__list-open");
    }
})

let testBtn1 = document.querySelector(".test__buttons-two");
let testWrapper1 = document.querySelector(".test__content1");
let testBtn = document.querySelector(".test__buttons-one");
let testWrapper = document.querySelector(".test__content");

testBtn1.addEventListener("click", function() {
    if (!testWrapper1.matches(".test__content1--open" )) {
        testWrapper1.classList.add("test__content1--open");
    } else {
        testWrapper1.classList.remove("test__content1--open");
    }
});

testBtn.addEventListener("click", function() {
    if (!testWrapper.matches(".test__content--open" )) {
        testWrapper.classList.add("test__content--open");
    } else {
        testWrapper.classList.remove("test__content--open");
    }
});