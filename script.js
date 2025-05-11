const containerCell = document.querySelector("#container")
const numberOfCells = 16 
let isDrawing = false

function createBoard (numberOfCells) {
   const area = numberOfCells * numberOfCells
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
   containerCell.style.gridTemplateColumns = `repeat(${numberOfCells}, 1fr)`;
   containerCell.style.gridTemplateRows = `repeat(${numberOfCells}, 1fr)`;
}


document.addEventListener("mouseup", () => {
   isDrawing = false
})
 createBoard(16)