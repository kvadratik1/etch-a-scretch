const containerCell = document.querySelector("#container")
const clearButtonEl = document.querySelector("#clear-button")
const NUMBER_OF_CELLS = 16 
let isDrawing = false

function createBoard (NUMBER_OF_CELLS) {
   const area = NUMBER_OF_CELLS * NUMBER_OF_CELLS
   for (let i = 0; i < area; i++) {

   const newCell = document.createElement("div")
   newCell.classList.add("cell");
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