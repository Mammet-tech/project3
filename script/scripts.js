document.getElementById("button").addEventListener("click", saveNote);
function saveNote() {
  let note = document.getElementById("note").value;
  if (note === "") {
    alert("Please enter a note");
    return;
  }
  let notes = localStorage.getItem("notes");
    if (notes === null) {
      notes = [];
    } else {    
      notes = JSON.parse(notes);
    }
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("note").value = "";
    displayNotes();
}

function displayNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  }
  notes = JSON.parse(notes);
  let ul = document.getElementById("notes");
  ul.innerHTML = "";
  notes.forEach(function(note) {
    let li = document.createElement("li");
    li.innerHTML = note;
    ul.appendChild(li);
  });
}