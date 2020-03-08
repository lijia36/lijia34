let cells=document.getElementsByTagName("td");
var i;
for (i = 0;i<cells.length; i++)
{
  cells[i].textContent="cell " + (i+1);    
  cells[i].onclick = function(){
    this.classList.add("BOOM");
  }
}
