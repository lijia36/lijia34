var button = document.getElementById("button")

button.onclick = function(){
    var numrows = document.getElementById("rows").value;
    var numcols = document.getElementById("cols").value;

    console.log("numrows="+numrows);
    console.log("numcols="+numcols);

    var board = document.getElementById("board");

    var rowval=" ";
    for (var r=0;r<numrows;r++){
        rowval=rowval+" 1fr"
    }

    console.log("rowval="+rowval);

    board.style.setProperty("grid-template-rows",rowval);
    }

    while(board.firstChild){
        board.removeChild(board.firstChild);
    
    let tr = document.createElement("tr");
    document.body.appendChild(tr);
} 