const containerCell = document.querySelector("#container")
const clearButtonEl = document.querySelector("#clear-button")
const changeSizeButtonEl = document.querySelector("#size")
const NUMBER_OF_CELLS = 16 
let isDrawing = false

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
         newCell.style.backgroundColor = "black"
      }
      newCell.addEventListener("mousedown", () => {
         isDrawing = true
         newCell.style.backgroundColor = "black";
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
