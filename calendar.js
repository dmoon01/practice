const calendarContainer = document.querySelector(".js-calendar"),
    calendarTitle = calendarContainer.querySelector("h2");

function getDate(){
    const date = new Date();
    const month = date.toLocaleDateString();
    calendarTitle.innerText = `${month}`;
}

function init (){
    getDate();
    setInterval(getDate, 1000);
}

init();