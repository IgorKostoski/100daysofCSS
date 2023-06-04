let theme = "dark";
$(".frame").bind("click", function() {
    if(theme == "dark") {
        $(".needle").addClass("light");
        $(".needle").removeClass("dark");
        document.getElementById("animRight-light").beginElement();
        document.getElementById("animLeft-light").beginElement();
        theme = "light";
    } else {
        $(".needle").addClass("dark");
        $(".needle").removeClass("light");
        document.getElementById("animRight-dark").beginElement();
        document.getElementById("animLeft-dark").beginElement();
        theme = "dark";
    }
});