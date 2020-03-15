let cells=document.getElementsByClassName("grass");
var i;
for (i = 0;i<cells.length; i++)
{

if (Math.random() >= 0.65){
  console.log("BOMB");
  cells[i].textContent= "BOMB";
  cells[i].style.visibility="hidden";
}

else {
  console.log("SAFE");
  cells[i].textContent= "SAFE";
  cells[i].style.visibility="hidden";
}

}
let boxes=document.getElementsByTagName("td")
var i;
for (i = 0;i<boxes.length; i++){
  boxes[i].onclick = function(){
    console.log("click");
    this.classList.add("BOOM");
    this.getElementsByClassName("grass")[0].style.visibility="visible";
  }
}
