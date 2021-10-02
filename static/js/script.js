function hello(){
    newDiv = document.createElement("div");
    newNode = document.createTextNode("Hello World... from Javascript!");
    newDiv.appendChild(newNode);
    currentDiv = document.getElementsById("modDiv");
    document.body.insertBefore(newDiv, currentDiv);
}