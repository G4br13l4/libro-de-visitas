//funcion para mostrar texto
var messageSubmitted = document.getElementById("message-submitted");
messageSubmitted.addEventListener("keyup", showPreview);

// variable para referirme a textarea
var messagePreview= document.getElementById("message-previsual");

//funcion para reflejar texto en textarea
function showPreview() {
    messagePreview.textContent = messageSubmitted.value;
}

//funcion para boton large

var largeBtn = document.getElementById("large-text");
largeBtn.addEventListener("click", largeText);

function largeText() {
    messagePreview.style.fontSize = "3em";
}

//funcion para boton medium

var mediumBtn = document.getElementById("medium-text");
mediumBtn.addEventListener("click", mediumText);

function mediumText() {
    messagePreview.style.fontSize = "2em";
}

//funcion para boton small

var smallBtn = document.getElementById("small-text");
smallBtn.addEventListener("click", smallText);

function smallText() {
    messagePreview.style.fontSize = "0.8em";
}

//funcion para cambiar color de letra

var textColorBtn = document.getElementById("colored-text");
textColorBtn.addEventListener("click", coloredText);

function coloredText() {
    var color = prompt("Escribe de que color quiere tu texto");
    messagePreview.style.color = color;
}

//funcion para cambiar color de caja

var boxColorBtn = document.getElementById("colored-box");
boxColorBtn.addEventListener("click", coloredBox);

function coloredBox() {
    var color = prompt("Escribe de que color quieres tu fondo");
    messagePreview.style.backgroundColor = color;
}

//funcion para mover texto a la izquierda

var leftBtn = document.getElementById("left-position");
leftBtn.addEventListener("click", leftPosition);

function leftPosition() {
    messagePreview.style.textAlign = "left";
}

//funcion para mover texto al centro

var centerBtn = document.getElementById("center-position");
centerBtn.addEventListener("click", centerPosition);

function centerPosition() {
    messagePreview.style.textAlign = "center";
}

//funcion para mover texto a la derecha

var rightBtn = document.getElementById("right-position");
rightBtn.addEventListener("click", rightPosition);

function rightPosition() {
    messagePreview.style.textAlign = "right";
}

//funcion para mandar style de message preview



//funcion para pintar mensajes 

var sendBtn = document.getElementById("send-message");
sendBtn.addEventListener("click", printMessage);

function printMessage(messagePreview) {
    var message = document.createElement("DIV");
    message.textContent = messageSubmitted.value;
    message.classList.add("col-12","border","border-warning"); 
    document.getElementById("posts-container").appendChild(message);
    
}





    
    
    
