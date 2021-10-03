const delay = ms => new Promise(res => setTimeout(res, ms));
var speed = 2500;
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
    logo = document.querySelector(".logo");
    logoText = document.querySelector(".logo-text");
    button = document.querySelector(".btn");
    $(image).addClass("arrow-clicked");
    $(image).removeClass("arrow");
    $(logo).addClass("logo-out");
    $(logoText).addClass("logo-text-out");
    $(button).fadeOut(1000, function(){
        button.remove();
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
    let arrow = document.querySelector(".top-left-arrow-new");
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
    const messageBox = document.createElement("div");
    messageBox.classList.add('col-auto');
    messageBox.classList.add('message-box');
    messageBox.classList.add('mx-3');
    div.style.top = (document.getElementById("textOut").getBoundingClientRect().bottom + 4).toString() + "px";
    document.getElementById("textOut").setAttribute('id', 'oldText');
    div.appendChild(input);
    div.appendChild(button);
    div.appendChild(messageBox);
    document.getElementById("level-1").appendChild(div);
}

async function level1Start() {
    const animated = document.querySelector('.switch');
    let leftArrow = document.querySelector("img");
    console.log(leftArrow);
    input = "Hello there!"
    prom = delay(speed).then((res) => {fadeInText()});
    await prom;
    $(leftArrow).addClass("anim");
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Welcome to TypeRose.";
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "What is your name?";
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    createInput('name');
    document.body.style.background = "linear-gradient(-45deg, #1A1A1B, #333F44, #65a09c, #65a09c)";
    document.body.style.backgroundSize = "300% 300%";
    document.body.style.backgroundPosition = "100% 50%";
}

function code(text, color) {
    return '<span style="font-family: monospace; color: ' + color + ';">' + text + '</span>';
}

async function level2Start() {
    input = 'In my native language of JavaScript, a ' + code('variable', 'purple') + ' named ' + code('greeting', 'yellow') + ' would be defined as:';
    let prom = delay(speed*2).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed*1.3).then((res) => {newLine()});
    await prom;
    input = '<span style="font-family: monospace;"><span style="color: purple;">var</span> <span class="text-warning">greeting</span> = <span class="text-success">"Hello!"</span>;</span>';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = 'Each variable has a <em>type</em>.';
    fadeInText();
    prom = delay(speed*1.2).then((res) => {newLine()});
    await prom;
    input = 'A type essentially states what the variable should look like.';
    fadeInText();
    prom = delay(speed*1.4).then((res) => {newLine()});
    await prom;
    input = 'The most common data types are ' + code('strings', 'green') + ', ' + code('integers', 'orange') + ', ' + code('floats', 'blue') + ', and ' + code('booleans', 'red') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "Press any key to continue."
    fadeInText();
    prom = delay(speed).then((res) => {
        $(document).on('keypress', (e) => {
            window.location.hash = 'level=3';
            $(document).off('keypress');
        });
    });
    await prom;
}

async function level3Start() {
    input = 'A ' + code('string', 'green') + ' is a word or series of words.';
    let prom = delay(speed).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = code('Strings', 'green') + ' are created like this: ' + code('var', 'purple') + ' ' + code('someString', 'yellow') + ' = ' + code('"A string"', 'green') + '.';
    fadeInText();
    prom = delay(speed*1.5).then((res) => {newLine()});
    await prom;
    input = 'Try assigning the string ' + code('"Hello, world!"', 'green') + ' to the ' + code('variable', 'purple') + ' ' + code('greeting', 'yellow') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    createInput('string');
}

async function level4Start() {
    input = 'An ' + code('integer', 'orange') + ', also known as an int, is a integer value (a positive or negative whole number).';
    let prom = delay(speed*1.5).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed*1.5).then((res) => {newLine()});
    await prom;
    input = 'It is important to note that ' + code('integers', 'orange') + ' cannot contain a decimal or fractional value.';
    fadeInText();
    prom = delay(speed*1.3).then((res) => {newLine()});
    await prom;
    input = code('Integers', 'orange') + ' are created like this: ' + code('var', 'purple') + ' ' + code('someInt', 'yellow') + ' = ' + code('5', 'orange') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = 'Try assigning the integer ' + code('62', 'orange') + ' to the ' + code('variable', 'purple') + ' ' + code('velocity', 'yellow') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    createInput('integer');
}

async function level5Start() {
    input = 'A ' + code('float', 'blue') + ', or a floating-point number, is a number that can be expressed as a decimal (e.g. -12.37).';
    let prom = delay(speed*1.8).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed*1.5).then((res) => {newLine()});
    await prom;
    input = 'It is important to note that ' + code('integers', 'orange') + ' can become ' + code('floats', 'blue') + ' without change in value, but not the other way around.';
    fadeInText();
    prom = delay(speed*1.3).then((res) => {newLine()});
    await prom;
    input = code('Floats', 'blue') + ' are created like this: ' + code('var', 'purple') + ' ' + code('someFloat', 'yellow') + ' = ' + code('-6.083', 'blue') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = 'Try assigning the float ' + code('-305.20', 'blue') + ' to the ' + code('variable', 'purple') + ' ' + code('balance', 'yellow') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    createInput('float');
}

async function level6Start() {
    input = 'The last major variable type is the ' + code('boolean', 'red') + ', a ' + code('true', 'red') + ' or ' + code('false', 'red') + ' value.';
    let prom = delay(speed*1.6).then((res) => {fadeInText()});
    await prom;
    prom = delay(speed*1.7).then((res) => {newLine()});
    await prom;
    input = 'It is important to note that ' + code('1', 'red') + ' can mean ' + code('true', 'red') + ' and that ' + code('0', 'red') + ' can mean ' + code('false', 'red') + '.';
    fadeInText();
    prom = delay(speed*1.3).then((res) => {newLine()});
    await prom;
    input = code('Booleans', 'red') + ' are created like this: ' + code('var', 'purple') + ' ' + code('someBool', 'yellow') + ' = ' + code('false', 'red') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = 'Try assigning the boolean value ' + code('true', 'red') + ' to the ' + code('variable', 'purple') + ' ' + code('test', 'yellow') + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    createInput('boolean');
}

async function booleanButtonAfter(button, codeInput) {
    // check if input is correct
    let message;
    let correct = false;
    eval(codeInput.value);
    if (typeof(test) != 'undefined') {
        if (test === true) {
            correct = true;
            message = code("Good job! You correctly assigned the variable.", "green");
        } else {
            correct = false;
            message = code("Try again. You did not assign the correct value to the variable test.", "red");
        }
    } else {
        correct = false;
        message = code("Try again. You have not created the variable test.", "red");
    }
    $('.message-box')[0].innerHTML = message;
    if (correct) {
        codeInput.setAttribute("disabled", "1");
        button.classList.add("d-none");
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Great job! Now you know how to define a ' + code('boolean', 'red') + '.';
        fadeInText();
        prom = delay(speed/2).then((res) => {newLine()});
        await prom;
        input = 'Thank you for learning with me today! More updates will come in the future.';
        fadeInText();
    }
}

async function floatButtonAfter(button, codeInput) {
    // check if input is correct
    let message;
    let correct = false;
    eval(codeInput.value);
    if (typeof(balance) != 'undefined') {
        if (balance == -305.20) {
            correct = true;
            message = code("Good job! You correctly assigned the variable.", "green");
        } else {
            correct = false;
            message = code("Try again. You did not assign the correct value to balance.", "red");
        }
    } else {
        correct = false;
        message = code("Try again. You have not created the variable balance.", "red");
    }
    $('.message-box')[0].innerHTML = message;
    if (correct) {
        codeInput.setAttribute("disabled", "1");
        button.classList.add("d-none");
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Great job! Now you know how to define a ' + code('float', 'blue') + '.';
        fadeInText();
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Press any key to learn about ' + code('booleans', 'red') + '.';
        fadeInText();
        prom = delay(speed/2).then((res) => {
            $(document).on('keypress', (e) => {
                window.location.hash = 'level=6';
                $(document).off('keypress');
            });
        });
        await prom;
    }
}

async function integerButtonAfter(button, codeInput) {
    // check if input is correct
    let message;
    let correct = false;
    eval(codeInput.value);
    if (typeof(velocity) != 'undefined') {
        if (velocity == 62) {
            correct = true;
            message = code("Good job! You correctly assigned the variable.", "green");
        } else {
            correct = false;
            message = code("Try again. You did not assign the correct value to velocity.", "red");
        }
    } else {
        correct = false;
        message = code("Try again. You have not created the variable velocity.", "red");
    }
    $('.message-box')[0].innerHTML = message;
    if (correct) {
        codeInput.setAttribute("disabled", "1");
        button.classList.add("d-none");
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Great job! Now you know how to define an ' + code('integer', 'orange') + '.';
        fadeInText();
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Press any key to learn about ' + code('floats', 'blue') + '.';
        fadeInText();
        prom = delay(speed/2).then((res) => {
            $(document).on('keypress', (e) => {
                window.location.hash = 'level=5';
                $(document).off('keypress');
            });
        });
        await prom;
    }
}

async function stringButtonAfter(button, codeInput) {
    // check if input is correct
    let message;
    let correct = false;
    eval(codeInput.value);
    if (typeof(greeting) != 'undefined') {
        if (greeting == "Hello, world!") {
            correct = true;
            message = code("Good job! You correctly assigned the variable.", "green");
        } else {
            correct = false;
            message = code("Try again. You did not assign the correct value to greeting.", "red");
        }
    } else {
        correct = false;
        message = code("Try again. You have not created the variable greeting.", "red");
    }
    $('.message-box')[0].innerHTML = message;
    if (correct) {
        codeInput.setAttribute("disabled", "1");
        button.classList.add("d-none");
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Great job! Now you know how to define a ' + code('string', 'green') + '.';
        fadeInText();
        prom = delay(speed).then((res) => {newLine()});
        await prom;
        input = 'Press any key to learn about ' + code('integers', 'orange') + '.';
        fadeInText();
        prom = delay(speed/2).then((res) => {
            $(document).on('keypress', (e) => {
                window.location.hash = 'level=4';
                $(document).off('keypress');
            });
        });
        await prom;
    }
}

async function nameButtonAfter(button, codeInput) {
    codeInput.setAttribute('disabled', '1');
    button.remove();
    let prom = delay(speed/2).then((res) => {newLine()});
    await prom;
    input = "Hello, " + codeInput.value + '.';
    fadeInText();
    prom = delay(speed).then((res) => {newLine()});
    await prom;
    input = "You may be wondering how I, a computer, remembered your name."
    fadeInText();
    prom = delay(speed*1.5).then((res) => {newLine()});
    await prom;
    input = "Computers like myself use what are called variables to store information."
    fadeInText();
    prom = delay(speed*1.5).then((res) => {newLine()});
    await prom;
    input = "Press any key to continue and discuss variables."
    fadeInText();
    prom = delay(speed/2).then((res) => {
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
