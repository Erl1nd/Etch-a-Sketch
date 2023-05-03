
// SETTING UP THE GRID SYSTEM
let size = document.getElementById("slider").value;
let container = document.querySelector(".container");
let div;
let row;


for (let i = 0; i < size; i++) {
    row = document.createElement(`row`);
    row.classList.add("row")
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
        div = document.createElement(`div`);
        div.classList.add("div-grid");
        row.appendChild(div);
    }
}


let divGrid = document.querySelectorAll(".div-grid");

// PEN COLOR
let penColor = document.getElementById("fav-color");

divGrid.forEach(element => {
    element.addEventListener("mouseover", function() {
        this.style.backgroundColor = `${penColor.value}`;
    })
});

// CANVAS COLOR
let canvasColor = document.getElementById("canvas-color");
canvasColor.addEventListener("change", function(){
    container.style.backgroundColor = canvasColor.value;
})

// TOGGLE GRID
let toggleGrid = document.querySelector(".toggle-grid");
toggleGrid.addEventListener("click", function(){
    toggleGrid.classList.toggle("button-on")
    divGrid.forEach(element => {
        element.classList.toggle("div-grid-border");
    });
})

// TOGGLE ERASER
let toggleEraser = document.querySelector(".toggle-eraser");
toggleEraser.addEventListener("click", function(){
    toggleEraser.classList.toggle("button-on")
    toggleRainbowPen.classList.remove("button-on");
    if(toggleEraser.classList.contains("button-on")) {
        divGrid.forEach(element => {
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = "transparent";
            })
        });
    } else {
        divGrid.forEach(element => {
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = `${penColor.value}`;
            })
        });
    }
})

// TOGGLE RAINBOW PEN
let toggleRainbowPen = document.querySelector(".toggle-rainbow-pen");
toggleRainbowPen.addEventListener("click", function(){
    toggleRainbowPen.classList.toggle("button-on");
    toggleEraser.classList.remove("button-on");
    if(toggleRainbowPen.classList.contains("button-on")) {
        divGrid.forEach(element => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = "#" + randomColor;
            })
        });
    }  else {
        divGrid.forEach(element => {
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = `${penColor.value}`;
            })
        });
    }
})

// CLEAR CANVAS
let clearCanvas = document.querySelector(".clear-canvas");
clearCanvas.addEventListener("click", function(){
    divGrid.forEach(element => {
        element.style.backgroundColor = "transparent";
    });
    
})