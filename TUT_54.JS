console.log("This is tut 54 and today we will solve the exercise given by harry of creating an alarm clock")

const newAlarm = document.getElementById("setAlarm")
var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg')

newAlarm.addEventListener("click", setAlarm)

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();

    console.log("Setting the alarm ......")

    let regex = /([0-9]){4}-([0-9]){2}-([0-9]){2} ([0-9]){2}:([0-9]){2}:([0-9]){2}/

    const alarm = document.getElementById("alarm")
    
    if(regex.test(alarm.value)){
    
        alarm.classList.remove("is-invalid")

        let date = new Date(alarm.value);
        let now = new Date();
        let timeToAlarm = date-now
        console.log(`Time Remaining ${timeToAlarm}`)

        if(timeToAlarm >=0 ){
            setTimeout(() => {
                console.log("Ringing")
                ringBell();
            }, timeToAlarm);
        }
    }else{
        console.log("We had an error")
        alarm.classList.add("is-invalid")
    }


}