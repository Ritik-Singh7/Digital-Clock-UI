function updateClock(){
    let now = new Date();

    // for time
    
    let hour = now.getHours();
    let min = now.getMinutes();
    let ampm = "";

    if (hour == 0) {
        hour = 12;
    } else if ( hour > 12){
        hour = (hour-12);
    }
    
    if (now.getHours() >= 12){
        ampm = "PM";
    } else{
        ampm = "AM";
    }
    
    if (hour < 10){
        hour = "0"+hour;
    }

    if (min < 10 ){
        min = "0" + min;
    }

    // for date

    let date_no = now.getDate();
    const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", 
                    "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    let month = monthNames[now.getMonth()];
    let year =1900 + now.getYear();


    // for day

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = dayNames[now.getDay()];

    document.getElementById("hour").innerHTML = `${hour}:`;
    document.getElementById("min").innerHTML = `${min}`;
    document.getElementById("ampm").innerHTML = `${ampm}`;

    document.getElementById("date").innerText = `${date_no} ${month} ${year} ,`;
    document.getElementById("day").innerText = `${day}`
}

updateClock();
setInterval(updateClock, 1000);
