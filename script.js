function getCurrentDateAndTime(){
    const dateTime = new Date().getFullYear();
    return dateTime;
}

const dateDisplay = document.getElementById("current_date");
dateDisplay.textContent = getCurrentDateAndTime()