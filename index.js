var ul = document.getElementById("collapsible");
var items = ul.getElementsByTagName("li");
for(var i = 0; i < items.length; i++){
    items[i].style.display = "block";
}
function expand() {
    var ul = document.getElementById("collapsible");
    var items = ul.getElementsByTagName("li");
    for(var i  = 0; i < items.length; i++){
        
        if(items[i].style.display === "none"){
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

function showFurniture(){
    alert("furniture");
}

function showPeople(){
    alert("people");
}

function showMisc(){
    alert("misc");
}

function spotlightAlphabet(){
    var alpha = document.getElementById("alphabetSpotlight");
    var landing = document.getElementById("landing");
    alpha.style.display = "block";  
    landing.style.display ="none";
}