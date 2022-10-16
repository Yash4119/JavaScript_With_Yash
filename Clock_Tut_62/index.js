console.log("This is Clock.js")

function updateClock(){
    let todayDate = new Date();

    let currentHours = todayDate.getHours();
    let currentMinutes = todayDate.getMinutes();
    let currentSeconds = todayDate.getSeconds();

    let meridiem = (currentHours >= 12)? "PM" : "AM";

    if(currentHours > 12){
        currentHours - 12;
        (currentHours == 12)? meridiem='AM':meridiem=meridiem;
    }    

    currentMinutes = ((currentMinutes < 10)? "0" : "") + currentMinutes;
    currentSeconds = ((currentSeconds < 10)? "0" : "") + currentSeconds;

    let currTimeStr = currentHours + " : " + currentMinutes + " : " + currentSeconds + " " + meridiem;

    let clock = document.getElementById("digital-clock")
    clock.innerHTML = currTimeStr;
}