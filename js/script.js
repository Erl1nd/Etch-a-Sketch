
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
    if(toggleEraser.classList.contains("button-on")) {
        divGrid.forEach(element => {
            element.addEventListener("mouseover", function() {
                this.style.backgroundColor = `white`;
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
