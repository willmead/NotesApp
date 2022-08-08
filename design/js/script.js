var noteCards = Array.prototype.slice.call(document.getElementsByClassName("note-card"));

noteCards.forEach(function(noteCard){
  noteCard.addEventListener("click", function(event){
    removeSelectedFromAll();
    this.classList.toggle("selected");
    toggleNav();
  });
});

function removeSelectedFromAll(){
  noteCards.forEach(function(noteCard){
    noteCard.classList.remove("selected");
  });
}


var openButton = document.getElementById("openbtn");
var sidebar = document.getElementById('sidebar');

openButton.addEventListener('click', toggleNav);

function toggleNav() {
  if (sidebar.style.left == "0px") {
    sidebar.style.left = "-20em";
    openButton.style.marginLeft = "0em";
  }
  else {
    openButton.style.marginLeft = "15em";
    sidebar.style.left = "0px";
  }
}
