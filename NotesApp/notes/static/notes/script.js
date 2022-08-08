var simplemde = new SimpleMDE({
  renderingConfig: {
    codeSyntaxHighlighting: true
  },
  toolbar: ["bold", "italic", "heading", "|",
            "quote", "link", "unordered-list", "ordered-list", "|",
            "code", "image", "table", "horizontal-rule", "|",
            "preview", "side-by-side", "fullscreen"]
});
var noteCards = Array.prototype.slice.call(document.getElementsByClassName("note-card"));

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

noteCards.forEach(function(noteCard){
  noteCard.addEventListener("click", function(event){
    removeSelectedFromAll();
    this.classList.toggle("selected");

    var id = noteCard.getElementsByClassName("id")[0].value;
    data = JSON.stringify({
          ID: id,
        })
    let csrftoken = getCookie('csrftoken');

    var opts = {
      method: 'POST',
      body: data,
      headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken }
    };

    fetch("/notes", opts)
        .then((response) => response.json())
        .then((result_data) => {
          simplemde.value(result_data['note']);
        });

  });
});

function removeSelectedFromAll(){
  noteCards.forEach(function(noteCard){
    noteCard.classList.remove("selected");
  });
}

var openButton = document.getElementById("openbtn");
var sidebar = document.getElementById('sidebar');
var main = document.getElementById('main');

openButton.addEventListener('click', toggleNav);
main.addEventListener('click', closeNav);

function closeNav(e) {
  if (e.target == openButton) {
    return;
  }
  if (sidebar.style.left == "0px") {
    sidebar.style.left = "-20em";
    openButton.style.marginLeft = "0em";
  }
}


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
