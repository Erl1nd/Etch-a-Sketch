const defaultSize = 35;
const container = document.querySelector(".container");
const slider = document.getElementById("slider");
const createNewCanvas = document.querySelector(".create-new-canvas")
const penColor = document.getElementById("pen-color");
const canvasColor = document.getElementById("canvas-color");
const toggleGrid = document.querySelector(".toggle-grid");
const toggleEraser = document.querySelector(".toggle-eraser");  
const toggleRainbowPen = document.querySelector(".toggle-rainbow-pen"); 
const clearCanvas = document.querySelector(".clear-canvas");
let eraserOn = false;
let rainbowPenOn = false;


populateBoard(35);
if (eraserOn == false && rainbowPenOn == false) {
    document.querySelectorAll(".div-grid").forEach(element => {
        element.addEventListener("mouseover", function() {
            this.style.backgroundColor = `${penColor.value}`;
        })
    });
}

// CHANGE CANVAS COLOR
canvasColor.addEventListener("change", function(){
    container.style.backgroundColor = canvasColor.value;
})

// TOGGLE GRID
toggleGrid.addEventListener("click", function (){
    toggleGrid.classList.add("button-on")
    document.querySelectorAll(".div-grid").forEach(element => {
        element.classList.toggle("div-grid-border");
    });
})

// ERASER
toggleEraser.addEventListener("click", function(){
    eraserOn = !eraserOn;
    toggleEraser.classList.toggle("button-on");
    if(eraserOn == true) {
        erase();
        rainbowPenOn = false;
        if(toggleRainbowPen.classList.contains("button-on") == true){
            toggleRainbowPen.classList.remove("button-on")
        }
    } else {
        document.querySelectorAll(".div-grid").forEach(element => {
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = `${penColor.value}`;
            })
        });
    }
})

// RAINBOWPEN
toggleRainbowPen.addEventListener("click", function(){
    rainbowPenOn = !rainbowPenOn;
    toggleRainbowPen.classList.toggle("button-on");
    if(rainbowPenOn == true) {
        useRainbowPen();
        eraserOn = false;
        if(toggleEraser.classList.contains("button-on") == true){
            toggleEraser.classList.remove("button-on");
        }
    } else {
        document.querySelectorAll(".div-grid").forEach(element => {
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = `${penColor.value}`;
            })
        });
    }
})

// CLEAR CANVAS
clearCanvas.addEventListener("click", function(){
    clear();
})


function deletePreviousCanvas() {
    let squares = document.querySelectorAll(".row")
    if (container.hasChildNodes()) {
        squares.forEach(div => {
            div.remove();
        });
    } else {
        console.log("no previous squares");
    }
}

function populateBoard(size) {
    console.log(size);
    let amount = size;
    for (let i = 0; i < amount; i++) {
        let row = document.createElement(`row`);
        row.classList.add("row")
        container.appendChild(row);
        for (let j = 0; j < amount; j++) {
            let div = document.createElement(`div`);
            div.classList.add("div-grid");
            row.appendChild(div);
        }
    } 
}

function erase() {
    document.querySelectorAll(".div-grid").forEach(div => {
        div.addEventListener("mouseover", function() {
            this.style.backgroundColor = "transparent";
        })
    });  
}

function useRainbowPen() {
    document.querySelectorAll(".div-grid").forEach(element => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#" + randomColor;
        })
    });
}

function clear() {
    let divGrid = document.querySelectorAll(".div-grid");
    divGrid.forEach(element => {
        element.style.backgroundColor = "transparent";
    });
}



// function deletePreviousCanvas() {
//     let squares = document.querySelectorAll(".row")
//     if (container.hasChildNodes()) {
//         squares.forEach(div => {
//             div.remove();
//         });
//     } else {
//         console.log("no previous squares");
//     }
// }

