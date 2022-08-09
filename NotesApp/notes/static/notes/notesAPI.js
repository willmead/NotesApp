/**
 * Gets the text of a specific note.
 * @param {string} id - The id of the note.
 * @return {string} - The text of the note.
 */
async function getNote(id) {
  let data = JSON.stringify({
    ID: currentID,
  })

  let opts = {
    method: 'POST',
    body: data,
    headers: HEADERS
  };

  return fetch("/note", opts)
  .then((response) => response.json())
  .then((json) => json["text"]);
}

/**
 * Overwrites the text of a note.
 * @param {string} id - The id of the note.
 * @param {string} text - The text to save.
 */
function saveNote(id, text) {
  let data = JSON.stringify({
    ID: id,
    TEXT: text
  });

  let opts = {
    method: 'POST',
    body: data,
    headers: HEADERS
  };

  fetch("/save", opts);
}
