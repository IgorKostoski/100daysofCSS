document.getElementById(
    "Day"
    ).innerHTML = new 
    Date().toLocaleDateString("en-US", {
        weekday: "long"
    });


    document.getElementById("Date").innerHTML
    = new Date()
        .toDateString()
        .split(" ")
        .splice(1)
        .join(" ")