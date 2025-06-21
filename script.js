const containerCell = document.querySelector("#container")
const clearButtonEl = document.querySelector("#clear-button")
const changeSizeButtonEl = document.querySelector("#size")
const colorPickerEl = document.querySelector("#color-picker")
const rainbowButtonEl = document.querySelector("#rainbow-button")

let currentColor = colorPickerEl.value
const NUMBER_OF_CELLS = 16 
let isDrawing = false
let rainbowMode = false 

colorPickerEl.addEventListener("input", () => {
   currentColor = colorPickerEl.value
 });

 function getRandomColor() {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
}

function createBoard (NUMBER_OF_CELLS) {
   containerCell.innerHTML = ""
   scale = (1000 / NUMBER_OF_CELLS)
   const area = NUMBER_OF_CELLS * NUMBER_OF_CELLS
   for (let i = 0; i < area; i++) {

   const newCell = document.createElement("div")
   newCell.classList.add("cell");
   newCell.style.width = scale + "px"
   newCell.style.height = scale + "px"
   newCell.addEventListener("mouseover", () => {
      if (isDrawing){
         newCell.style.backgroundColor = rainbowMode ? getRandomColor() : currentColor
      }
      newCell.addEventListener("mousedown", () => {
         isDrawing = true
         newCell.style.backgroundColor = rainbowMode ? getRandomColor() : currentColor
       })
   })
   containerCell.appendChild(newCell)
  }

   containerCell.style.display = "grid";
   containerCell.style.gridTemplateColumns = `repeat(${NUMBER_OF_CELLS}, 1fr)`;
   containerCell.style.gridTemplateRows = `repeat(${NUMBER_OF_CELLS}, 1fr)`;
}


document.addEventListener("mouseup", () => {
   isDrawing = false
})
 createBoard(NUMBER_OF_CELLS)

clearButtonEl.addEventListener("click", () => {
   containerCell.innerHTML = ""
   createBoard(NUMBER_OF_CELLS)
})
changeSizeButtonEl.addEventListener("click", () => {
   let numberOfCells = prompt("Choose number of cells")
   console.log(typeof numberOfCells)
   numberOfCells = parseInt(numberOfCells)
   if (numberOfCells >= 4 && numberOfCells <= 100 && Number.isInteger(numberOfCells)) {
      containerCell.innerHTML = ""
      createBoard(numberOfCells)
   }
})

rainbowButtonEl.addEventListener("click", () => {
   rainbowMode = !rainbowMode
   rainbowButtonEl.classList.toggle("active", rainbowMode)
})

