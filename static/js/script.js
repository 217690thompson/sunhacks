    const delay = ms => new Promise(res => setTimeout(res, ms));
    var speed = 70;
    var i = 0;
    var input;
    
    $(window).on('hashchange', function () {
        if (window.location.hash == '#level=1') {
            level1Start();
        }
    });
    
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
    }
    
    function newLine(){
        i = 0;
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
        input = "Hey there!";
        typeOut();
        newLine(); 
    }



