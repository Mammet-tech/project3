document.addEventListener("DOMContentLoaded", displayNotes);
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
  let notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";
  notes.forEach(function (note, index) {
    let noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = index + 1 + ". " + note;
    notesContainer.appendChild(noteElement);


    let editButton = document.createElement("span");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.addEventListener("click", function () {
      editNote(index);
    });
    noteElement.appendChild(editButton);

    let deleteButton = document.createElement("span");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function () {
      deleteNote(index);
    });
    noteElement.appendChild(deleteButton);    
  });
}


function editNote(index) {
  let notes = localStorage.getItem("notes");
    notes = JSON.parse(notes);
    let newNote = prompt("Enter new note", notes[index]);
    if (newNote === null) {
        return;
    }
    notes[index] = newNote;
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}


