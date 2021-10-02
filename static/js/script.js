const delay = ms => new Promise(res => setTimeout(res, ms));
    var speed = 2000;
    var input;
    
    $(window).on('hashchange', function () {
        if (window.location.hash == '#level=1') {
            level1Start();
        }
    });
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    /*async function typeOut(inc){
        if(inc < input.length) {
            document.getElementById("textOut").innerHTML += input.charAt(inc);
            inc++;
            console.log(inc);
            setTimeout(typeOut, speed);
        }
    }*/

    function fadeInText(){
        const thisP = document.querySelector("#textOut");
        thisP.innerHTML += input;
        $(thisP).addClass("anim");
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
    }
    
    function newLine(){
        const newP = document.createElement("p");
        console.log("New line called...");
        arrow = document.querySelector(".top-left-arrow-new");
        console.log(arrow);
        currentArrowTop = arrow.getBoundingClientRect().top;
        newArrowTop = currentArrowTop + 60;
        arrow.style.top = newArrowTop.toString() + "px";
        const thisDiv = document.getElementById("level-1");
        oldP = document.getElementById("textOut");
        oldP.setAttribute('id', 'oldText');
        newP.setAttribute('id', 'textOut');
        newP.style.top = (oldP.getBoundingClientRect().bottom + 4).toString() + "px";
        thisDiv.appendChild(newP);
    }
    async function level1Start(){
        console.log("Function called...");
        input = "Hello there!"
        fadeInText();
        let prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = "Welcome to this program.";
        fadeInText();
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = "Can I get your name?";
        fadeInText();
        prom = delay(speed).then((res) => {newLine()});
        await prom;
    }



