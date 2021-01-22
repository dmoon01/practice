// local storage : saving little pieces of user information in the local computer
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    journey = document.querySelector(".js-journey");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintJourney(currentValue);
    saveName(currentValue);
}

function askforJourney(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintJourney(text){
    form.classList.remove(SHOWING_CN);
    journey.classList.add(SHOWING_CN);
    journey.innerText = `Your Journey "${text}"`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askforJourney();
    } else {
        paintJourney(currentUser);
    }
}

function init(){
    loadName();
}

init();