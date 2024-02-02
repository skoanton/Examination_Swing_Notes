import { switchView } from "./viewHandler";
import {AddNewNote} from "./createNotes";
import {EditNote, RemoveNote} from "./editNotes";

//Buttons
const btnReadNotes: HTMLButtonElement | null = document.getElementById("btnReadNotes") as HTMLButtonElement | null;
const btnUpdateNote : HTMLButtonElement |null = document.getElementById("btnUpdateNote") as HTMLButtonElement | null;
const btnRemoveNote : HTMLButtonElement |null = document.getElementById("btnRemoveNote") as HTMLButtonElement | null;
const btnPublishNote : HTMLButtonElement | null = document.getElementById("btnPublishNote") as HTMLButtonElement | null;
const btnAddNewNote : HTMLButtonElement | null = document.getElementById("btnAddNewNote") as HTMLButtonElement | null;

export function addEventListner(){

    btnReadNotes?.addEventListener("click", switchView);

    btnAddNewNote?.addEventListener("click",switchView);

    btnPublishNote?.addEventListener("click", () =>{     
        const titleText:string = (document.getElementById("titleToAdd") as HTMLTextAreaElement).value;
        const noteText:string = (document.getElementById("noteToAdd") as HTMLTextAreaElement).value;
        const usernameInput:string = (document.getElementById("usernameInput") as HTMLInputElement).value;       
        console.log(noteText,usernameInput);
        AddNewNote(titleText,noteText,usernameInput);
    })

    btnUpdateNote?.addEventListener("click", () => {
        EditNote();
    })

    btnRemoveNote?.addEventListener("click",() =>{
        RemoveNote();
    })
}