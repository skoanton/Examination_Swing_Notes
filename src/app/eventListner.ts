import { switchView } from "./viewHandler";
import {createNote} from "./createNotes";
import { GetRequest } from "./api";

//Buttons
const btnReadNotes: HTMLButtonElement | null = document.getElementById("btnReadNotes") as HTMLButtonElement | null;
const btnPublishNote : HTMLButtonElement | null = document.getElementById("btnPublishNote") as HTMLButtonElement | null;
const btnAddNewNote : HTMLButtonElement | null = document.getElementById("btnAddNewNote") as HTMLButtonElement | null;

export function addEventListner(){

    btnReadNotes?.addEventListener("click", () =>{
        GetRequest();
        switchView();
    } );

    btnAddNewNote?.addEventListener("click",switchView);

    btnPublishNote?.addEventListener("click", () =>{
        const titleText:string = (document.getElementById("titleToAdd") as HTMLTextAreaElement).value;
        const noteText:string = (document.getElementById("noteToAdd") as HTMLTextAreaElement).value;
        const usernameInput:string = (document.getElementById("usernameInput") as HTMLInputElement).value;       
        console.log(noteText,usernameInput);
        createNote(titleText,noteText,usernameInput);
    })


}