var speed = 70;
var i = 0;
var input;

function typeOut(){
    if(i < input.length) {
        document.getElementById("textOut").innerHTML += input.charAt(i);
        i++;
        console.log(i);
        setTimeout(typeOut, speed); 
    }
}
function start(){

    console.log("Game started...");
    image = document.querySelector(".arrow");
    topLeftImage = document.querySelector(".top-left-arrow");
    button = document.querySelector(".btn");
    image.classList.add("arrow-clicked");
    image.classList.remove("arrow");
    $(button).fadeOut(500, function(){
        button.remove();
        $(topLeftImage).addClass("anim");
        window.location.hash = "level=1";
    });

    input = "Some text";
    typeOut();
}

