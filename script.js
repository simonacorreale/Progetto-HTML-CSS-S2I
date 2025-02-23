
//accordion
const panel = document.getElementsByClassName("main_card");
console.log(panel);

const panelArray = Array.from(panel);
console.log(panelArray);

panelArray.forEach((element, index) => {
    console.log("ciclo numero ", index);
    element.addEventListener("click", function () {
        element.classList.toggle("open");
    });
});

// element
let button = document.querySelector(".primary-button");
let item = document.querySelector(".primary-button .round");

button.addEventListener("mouseenter", function (event) {
    this.classList.add("animate"); // Cambiato da '+=' a 'add()' per evitare duplicazione

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 24) {
        item.style.top = 0 + "px";
    } else if (buttonY > 30) {
        item.style.top = 48 + "px";
    }

    item.style.left = buttonX + "px";
    item.style.width = "1px";
    item.style.height = "1px";
});

button.addEventListener("mouseleave", function (event) {
    this.classList.remove("animate");

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    // Reset delle proprietà per evitare che rimangano state precedenti
    item.style.top = "";
    item.style.left = "";
    item.style.width = "";
    item.style.height = "";

    // Ridisegnare la posizione, ma resetta le dimensioni
    if (buttonY < 24) {
        item.style.top = 0 + "px";
    } else if (buttonY > 30) {
        item.style.top = 48 + "px";
    }

    item.style.left = buttonX + "px";
});
