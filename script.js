//header
const header = document.createElement("h2");
document.body.appendChild(header);
header.textContent = "ETCH-A-SKETCH"

//button to create grid
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Create your grid";
button.style.color = "green";
button.addEventListener("click", createGrid);

//button to clear grid
const buttonClear = document.createElement("button");
document.body.appendChild(buttonClear);
buttonClear.textContent = "Clear your grid";
buttonClear.style.color = "red";
buttonClear.addEventListener("click", clearGrid);

//container definition
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);
//const containerPadding = window.getComputedStyle(container).getPropertyValue("padding");
const containerHeight = container.offsetHeight;
const containerWidth = container.offsetWidth;

const textContainer = document.createElement("div");
document.body.insertBefore(textContainer, container);

const gridElems = [];

function createGrid() {
    let gridSize = prompt("Input a grid size from 1 to 100", 16);
    if (gridSize === null) return;
    while (gridSize>100 || gridSize<1 || isNaN(+gridSize)) {
        if (gridSize === null) return;
        gridSize = prompt("Please input a number between 1 and 100");
    }
    textContainer.textContent = `Your chosen grid size is: ${gridSize} x ${gridSize}`;
    console.log(gridSize);

    for (i=0; i<gridSize*gridSize; i++) {
        gridElems[i] = document.createElement("div");
        gridElems[i].style.height = Math.floor(containerHeight/gridSize) + "px";
        gridElems[i].style.width = Math.floor(containerWidth/gridSize) + "px";
        gridElems[i].classList.add("gridElement");
        container.appendChild(gridElems[i]);
    }

    for (let myHover of gridElems) myHover.addEventListener("mouseenter", hoverProps);

    button.removeEventListener("click", createGrid);

    function hoverProps(e) {
        e.target.style.backgroundColor = "gray";
    }  
}

function clearGrid() {
    button.addEventListener("click", createGrid);
    for (k=container.childElementCount; k>0; k--) container.removeChild(container.lastChild);
    textContainer.textContent = "Your chosen grid size is: XX x XX";
}

