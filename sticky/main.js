const btnAddNote = document.querySelector(".add-note");
const notesConatiner = document.querySelector(".notes-container");
const notesCountLable = document.querySelector(".note-count")

{/* <div class="note note-style-2">
				<input type="text" class="note-title" placeholder="Enter note title...">
				<textarea class="note-body" placeholder="Enter note body..."></textarea>
			</div> */}
function createNoteElement() {
    const note = document.createElement("div")
    const title = document.createElement("input")
    const body = document.createElement("textarea")

    note.classList.add("note", getRandomNoteStyle())

    title.classList.add("note-title");
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Enter note title...");

    body.classList.add("note-body");
    body.setAttribute("placeholder", "Enter note body...");

    note.appendChild(title);
    note.appendChild(body);

    return note;
}


function getRandomNoteStyle() {
    const styles = [1, 2, 3];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)]

    return `note-style-${randomStyle}`;
}

function updateNotesCount() {
    const notesCount = notesConatiner.children.length;
    notesCountLable.textContent = `${notesCount} note${notesCount != 1 ? "s" : ""}`;
    console.log(notesCount);

}

btnAddNote.addEventListener("click", () => {
    const note = createNoteElement();

    note.addEventListener("dblclick", () => {
        const title = note.querySelector('.note-title').value;
        const removeNote = confirm(`Are you sure you wish to delete '${title}'?`)
        if (!removeNote) {
            return
        }
        note.remove();
        updateNotesCount();
    });

    notesConatiner.appendChild(note);
    updateNotesCount();

});