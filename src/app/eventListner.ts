import { switchView,views } from "./viewHandler";
import { createNote } from "./createNotes";
import { getRequest } from "./api";
import { resetList } from "./editNotes";
import { currentUsername, setUsername } from "./userHandler";
//Buttons
const btnReadNotes = document.getElementById("btnReadNotes") as HTMLButtonElement | null;
const btnPublishNote = document.getElementById("btnPublishNote") as HTMLButtonElement | null;
const btnAddNewNote = document.getElementById("btnAddNewNote") as HTMLButtonElement | null;
const btnLogin = document.getElementById("btnLogin") as HTMLButtonElement | null;
const btnChangeUser = document.getElementById("btnChangeUser") as HTMLButtonElement | null;
export function addEventListner() {

    btnReadNotes?.addEventListener("click", () => {

        resetList();
        getRequest(currentUsername);
        switchView(views.newNoteViewEl!,views.notesViewEl!);
        
    });

    btnAddNewNote?.addEventListener("click", () => {
        switchView(views.notesViewEl!,views.newNoteViewEl!);
    } );

    btnPublishNote?.addEventListener("click", () => {
        createNote();

    })

    btnLogin!.addEventListener("click", () => {
        const usernameInput = (document.getElementById("usernameLogin") as HTMLInputElement).value;
        if (usernameInput != "") {
            setUsername(usernameInput);
            getRequest(currentUsername);
            switchView(views.loginViewEl!,views.newNoteViewEl!);
        }
        else {
            window.alert("Skriv ett användarnamn först");
        }
    })

    btnChangeUser!.addEventListener("click", () => {
        switchView(views.newNoteViewEl!,views.loginViewEl!);
    })

}