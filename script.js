
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