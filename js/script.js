let container = document.querySelector(".container");
let slider = document.getElementById("slider");
let createNewGird = document.querySelector(".create-new-grid");


container.addEventListener("mouseenter", function() {
    if ((container.hasChildNodes(".row")) === false) {
        let h1;
        h1 = document.createElement("h1");
        h1.textContent = "Please Create a New Canvas"
        h1.style.color = "black"
        h1.classList.add("warning")
        container.appendChild(h1);
    } 
})

createNewGird.addEventListener("click", function(){
    // SETUP GRID
    deletePreviousGrid();
    let amount = slider.value;
    makeGrid(amount);

    // DRAW USING PEN COLOR
    let penColor = document.getElementById("fav-color");
    drawUsingPen(penColor.value);

    // CHANGE CANVAS COLOR
    let canvasColor = document.getElementById("canvas-color");
    canvasColor.addEventListener("change", function(){
        container.style.backgroundColor = canvasColor.value;
    })
        
    // TOGGLE GRID
    let toggleGrid = document.querySelector(".toggle-grid");
    let divGrid = document.querySelectorAll(".div-grid");
    toggleGrid.addEventListener("click", function(){
        toggleGrid.classList.toggle("button-on")
        divGrid.forEach(element => {
            element.classList.toggle("div-grid-border");
        });
    })

    // TOGGLE ERASER
    let toggleEraser = document.querySelector(".toggle-eraser");   
    toggleEraser.addEventListener("click", function(){
        if (toggleEraser.classList.contains("button-on")) {
            toggleEraser.classList.remove("button-on")
        } else {
            toggleEraser.classList.add("button-on")
        }
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
})

function deletePreviousGrid() {
    let warning = document.querySelectorAll("h1");
    let squares = document.querySelectorAll(".row")
    if (container.hasChildNodes()) {
        warning.forEach(div => {
            div.remove();
        });
        squares.forEach(div => {
            div.remove();
        });
    } else {
        console.log("no previous squares");
    }
}

function makeGrid(sliderValue) {

    for (let i = 0; i < sliderValue; i++) {
        let row = document.createElement(`row`);
        row.classList.add("row")
        container.appendChild(row);
    
        for (let j = 0; j < sliderValue; j++) {
            let div = document.createElement(`div`);
            div.classList.add("div-grid");
            row.appendChild(div);
        }
    } 
}

function drawUsingPen(penColor) {
    let divGrid = document.querySelectorAll(".div-grid");
    divGrid.forEach(element => {
        element.addEventListener("mouseover", function() {
            this.style.backgroundColor = `${penColor}`;
        })
    });
}

