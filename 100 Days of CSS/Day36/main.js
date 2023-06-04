const dashboardTab = 
document.querySelector(".dashboard");

const commentsTab = 
document.querySelector(".comments");

const notificationsTab = 
document.querySelector(".notifications");

const settingsTab = 
document.querySelector(".settings");

const searchTab = 
document.querySelector(".search");

function clearActiveContent() {
    document.getElementById("dashboard").classList.remove("active");
 
    document.getElementById("comments").classList.remove("active");

    document.getElementById("notifications").classList.remove("active");

    document.getElementById("settings").classList.remove("active");

    document.getElementById("search").classList.remove("active");
}


function tableContent1 () {
    clearActiveContent();


    document.getElementById("dasboard").classList.add("active");
}


function tableContent2 () {
    clearActiveContent ();

    document.getElementById("dashboard").classList.add("active");
}


function tableContent3 () {
    clearActiveContent () ;

    document.getElementById("notifications").classList.add("active");

}


function tableContent4 () {
    clearActiveContent () ;
    document.getElementById("settings").classList.add("active");
}


function tableContent5 () {
    clearActiveContent () ;
    document.getElementById("search").classList.add("active");
}


dashboardTab.addEventListener("click", tableContent1);
commentsTab.addEventListener("click", tableContent2);
notificationsTab.addEventListener("clikc", tableContent3);
settingsTab.addEventListener("click", tableContent4);
searchTab.addEventListener("click", tableContent5);