let size = 100;
let container = document.querySelector(".container");
let div;
let row


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
divGrid.forEach(element => {
    element.addEventListener("mouseover", function() {
        this.classList.add("black");
    })
});

