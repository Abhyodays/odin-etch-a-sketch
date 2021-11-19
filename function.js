let default_grid =16;
    let curr_grid = default_grid;
    
    const container = document.getElementById("container");
    const grid = document.getElementById("grid");
    setupGrid(curr_grid);
    const div = document.getElementsByClassName("gridDiv");
  function setupGrid(curr_grid){ 
    let size = "1fr ";
    let divBoxSize = size.repeat(curr_grid);
    grid.style.gridTemplateColumns =divBoxSize;
    grid.style.gridTemplateRows = divBoxSize;
      for(let i =0;i<curr_grid;i++){
      for(let j =0;j<curr_grid;j++){
        const dv = document.createElement("div");
        dv.onmouseover = function(){
          dv.style.backgroundColor = "black";
        }
        dv.style.border="2px solid pink";
        grid.appendChild(dv);
      }
    }
  }
  function grid_clear(){
    grid.innerHTML = "";
  }
  function reset(){
      curr_grid = prompt("Enter No. of Grids in rows:","16");
      if(curr_grid>100 || curr_grid<0){
        alert("Please Enter the value between 0 and 100!");
        return;
      }
      grid_clear();
      setupGrid(curr_grid);
    }