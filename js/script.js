var noteCards = Array.prototype.slice.call(document.getElementsByClassName("note-card"));

noteCards.forEach(function(noteCard){
  noteCard.addEventListener("click", function(event){
    removeSelectedFromAll();
    this.classList.toggle("selected");
  });
});

function removeSelectedFromAll(){
  noteCards.forEach(function(noteCard){
    noteCard.classList.remove("selected");
  });
}
