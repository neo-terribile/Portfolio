// Toggelt den Darkmode
function darkMode(){
    var icon = document.getElementById("icon")
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "img/moon.png";
    }else{
        icon.src = "img/sun.png";
    }
}