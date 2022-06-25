"use strict"

let boxes = document.getElementById("boxes")
let noOfBoxes = document.getElementById("noOfBoxes")
noOfBoxes.addEventListener("input", generateBoxes)

function generateBoxes(e){
    let number = parseInt(e.target.value)
    if (number > 1000 || number < 0) {
        number = 0
        e.target.value = number
    }

    boxes.innerHTML = ""
    for (let i=0;i<number;i++){
        let box=document.createElement("div")
        boxes.appendChild(box)
        box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }
}
