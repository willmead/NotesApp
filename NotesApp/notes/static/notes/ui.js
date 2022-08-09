const simplemdeConfig = {
  renderingConfig: {
    condeSyntaxHighlighting: true
  },
  toolbar: ["bold", "italic", "heading", "|",
            "quote", "link", "unordered-list", "ordered-list", "|",
            "code", "image", "table", "horizontal-rule", "|",
            "preview", "side-by-side", "fullscreen"]
}

let simplemde = new SimpleMDE(simplemdeConfig);
simplemde.codemirror.on("change", () => saveNote(currentID, simplemde.value()));


let noteCards = Array.prototype.slice.call(document.getElementsByClassName("note-card"));
let openButton = document.getElementById("openbtn");
let sidebar = document.getElementById('sidebar');
let main = document.getElementById('main');


for (const noteCard of noteCards) {
  noteCard.addEventListener("click", () => selectNoteCard(noteCard));
}

function selectNoteCard(noteCard) {
  noteCards.forEach((noteCard) => noteCard.classList.remove("selected"));
  noteCard.classList.add("selected");
  currentID = noteCard.id;
  getNote(currentID).then((text) => simplemde.value(text));
}

openButton.addEventListener('click', () => sidebar.classList.toggle("open"));
main.addEventListener('click', closeNav);

function closeNav(e) {
  if (e.target == openButton) {
    return;
  }
  sidebar.classList.remove("open");
}
