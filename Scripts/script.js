var icon = document.getElementById("icon");
var logo = document.getElementById("logo");


icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/sun.png";
        logo.src = "./assets/bluelogo.png";
        
    }
    else{
        icon.src = "./assets/moon.png";
        logo.src = "./assets/logo1.png";
    }
}


