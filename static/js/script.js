const delay = ms => new Promise(res => setTimeout(res, ms));
var speed = 2000;
var input;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function fadeInText(){
    const thisP = document.querySelector("#textOut");
    thisP.innerHTML += input;
    $(thisP).addClass("anim");
}

function start(){
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
    const thisDiv = document.getElementById("level-1");
    oldP = document.getElementById("textOut");
    oldP.setAttribute('id', 'oldText');
    newP.setAttribute('id', 'textOut');
    newP.style.top = (oldP.getBoundingClientRect().bottom + 4).toString() + "px";
    arrow = document.querySelector(".top-left-arrow-new");
    currentArrowTop = arrow.getBoundingClientRect().top;
    // newArrowTop = currentArrowTop + 60;
    newArrowTop = newP.style.top;
    arrow.style.top = newArrowTop;
    arrow.style.transform = "translate(0%, 15%)";
    thisDiv.appendChild(newP);
}

function createInput(paramName) {
    const div = document.createElement("div");
    div.classList.add("code-container");
    div.classList.add("row");
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add('col-auto');
    input.classList.add('code-input');
    input.classList.add('mx-3');
    input.classList.add('text-success');
    input.setAttribute('id', 'textOut');
    const button = document.createElement("button");
    button.role = "link"
    button.classList.add('code-submit');
    button.classList.add('btn-outline-success');
    button.classList.add('btn');
    button.classList.add('col-auto');
    button.setAttribute('role', 'link');
    button.setAttribute('id', paramName);
    button.setAttribute('onclick', 'doButtonStuff(event);');
    button.innerHTML = "Submit";
    div.style.top = (document.getElementById("textOut").getBoundingClientRect().bottom + 4).toString() + "px";
    document.getElementById("textOut").setAttribute('id', 'oldText');
    div.appendChild(input);
    div.appendChild(button);
    document.getElementById("level-1").appendChild(div);
}

async function level1Start() {
    input = "Hello there!"
    let prom = delay(speed).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Welcome to this program.";
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Can I get your name?";
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    createInput('name');
}

async function level2Start() {
    input = "In my native language of JavaScript, a variable named <span style='font-family: monospace;' class='text-warning'>greeting</span> would be defined as:"
    let prom = delay(speed).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = '<span style="font-family: monospace;"><span style="color: purple;">var</span> <span class="text-warning">greeting</span> = <span class="text-success">"Hello!"</span>;</span>';
    fadeInText();
}

async function nameButtonAfter(button, codeInput) {
    codeInput.setAttribute('disabled', '1');
    button.remove();
    let prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Hello, " + codeInput.value + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "You may be wondering how I, a computer, remembered your name."
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Computers like myself use what are called variables to store information."
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Press any key to continue and discuss variables."
    fadeInText();
    prom = delay(speed).then((res) => {
        $(document).on('keypress', (e) => {
            window.location.hash = 'level=2';
            $(document).off('keypress');
        });
    });
    await prom;
}

function doButtonStuff(event) {
    let node = event.target;
    let codeInput = node.previousElementSibling;
    // call database function with this stuff
    // call action related to this button
    window[node.id + 'ButtonAfter'](node, codeInput);
}
