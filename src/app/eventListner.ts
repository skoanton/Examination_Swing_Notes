import { switchView,views } from "./viewHandler";
import { createNote, currentUsername, setUsername } from "./createNotes";
import { getRequest } from "./api";
import { resetList } from "./editNotes";

//Buttons
const btnReadNotes: HTMLButtonElement | null = document.getElementById("btnReadNotes") as HTMLButtonElement | null;
const btnPublishNote: HTMLButtonElement | null = document.getElementById("btnPublishNote") as HTMLButtonElement | null;
const btnAddNewNote: HTMLButtonElement | null = document.getElementById("btnAddNewNote") as HTMLButtonElement | null;
const btnLogin = document.getElementById("btnLogin") as HTMLButtonElement;
const btnChangeUser = document.getElementById("btnChangeUser") as HTMLButtonElement;
export function addEventListner() {

    btnReadNotes?.addEventListener("click", () => {

        resetList();
        getRequest(currentUsername);
        switchView(views.newNoteViewEl,views.notesViewEl);
        

        
    });

    btnAddNewNote?.addEventListener("click", () => {
        switchView(views.notesViewEl,views.newNoteViewEl);
    } );

    btnPublishNote?.addEventListener("click", () => {
        createNote();

    })

    btnLogin.addEventListener("click", () => {
        const usernameInput = (document.getElementById("usernameLogin") as HTMLInputElement).value;
        if (usernameInput != "") {
            setUsername(usernameInput);
            console.log("Login page satte username till: " + currentUsername);
            getRequest(currentUsername);
            switchView(views.loginViewEl,views.newNoteViewEl);
        }
        else {

            window.alert("Fyll i alla fält innan du lägger till");

        }
    })

    btnChangeUser.addEventListener("click", () => {
        switchView(views.newNoteViewEl,views.loginViewEl);
    })

}