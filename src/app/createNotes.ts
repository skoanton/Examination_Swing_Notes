import { postRequest } from "./api";
import { removeNote, editNote, updateNote } from "./editNotes";
import {currentUsername} from "./userHandler";

const tilteTextArea = document.getElementById("titleToAdd") as HTMLInputElement | null;
const noteTextArea = document.getElementById("noteToAdd") as HTMLTextAreaElement | null;

export async function createNote() {
    const titleText:string = tilteTextArea!.value;
    const noteText:string = noteTextArea!.value;
    
    if (titleText != "" && noteText != "") {
        if((titleText.length < 5 || noteText.length < 5 )){
            window.alert("Skriv minst 5 tecken");
        }

        else{
            postRequest(currentUsername, titleText, noteText);
            tilteTextArea!.value = "";
            noteTextArea!.value = "";
        }
       
    }   
    
    else {
        window.alert("Fyll i alla fält innan du lägger till");
    }

}

export function addNewNote(titleText: string, noteText: string, username: string, date: string, id: string) {
   
    const ulEl = document.querySelector(".notes-list") as HTMLUListElement | null;

    const listEl = document.createElement("li") as HTMLElement | null;
    ulEl?.appendChild(listEl!);
    const articleEL = document.createElement("article") as HTMLElement | null;
    articleEL!.classList.add("note");
    articleEL!.id = id;
    listEl!.appendChild(articleEL!);

    const sectionNoteInfoEl = document.createElement("section") as HTMLElement | null ;
    sectionNoteInfoEl!.classList.add("note-info");
    articleEL!.appendChild(sectionNoteInfoEl!);

    const pDateEl  = document.createElement("p") as HTMLParagraphElement | null;
    pDateEl!.classList.add("publish-date");
    pDateEl!.textContent = date;
    sectionNoteInfoEl!.appendChild(pDateEl!);

    const textAreaTitleNoteEL = document.createElement("textarea") as HTMLTextAreaElement;
    textAreaTitleNoteEL.classList.add("title-note");
    textAreaTitleNoteEL.textContent = titleText;
    textAreaTitleNoteEL.readOnly;
    sectionNoteInfoEl!.appendChild(textAreaTitleNoteEL);


    const textAreaNoteEl = document.createElement("textarea") as HTMLTextAreaElement;
    textAreaNoteEl.classList.add("text-note");
    textAreaNoteEl.textContent = noteText;
    textAreaNoteEl.readOnly = true;
    sectionNoteInfoEl!.appendChild(textAreaNoteEl);

    const buttonUpdateEl = document.createElement("button") as HTMLButtonElement | null;
    buttonUpdateEl!.classList.add("update");
    buttonUpdateEl!.id = "btnUpdateNote";
    buttonUpdateEl!.textContent = "Edit";
    sectionNoteInfoEl!.appendChild(buttonUpdateEl!);
    buttonUpdateEl!.addEventListener("click", () => {
        
        if(buttonUpdateEl!.classList.contains("update")){
            editNote(id);
        }

        else if(buttonUpdateEl!.classList.contains("edit")){
            updateNote(id);
        }
                
    } )

    const sectionNoteFooterEl = document.createElement("section") as HTMLElement | null;
    sectionNoteFooterEl!.classList.add("note-footer");
    articleEL!.appendChild(sectionNoteFooterEl!);

    const sectionUserInfoEl = document.createElement("section") as HTMLElement | null;
    sectionUserInfoEl!.classList.add("user-info");
    sectionNoteFooterEl!.appendChild(sectionUserInfoEl!);

    const imgUserInfoEl = document.createElement("img") as HTMLImageElement | null;
    imgUserInfoEl!.src = ("./src/assets/dash.svg");
    sectionUserInfoEl!.appendChild(imgUserInfoEl!);

    const pUsernameEl = document.createElement("p") as HTMLParagraphElement | null;
    pUsernameEl!.classList.add("user");
    pUsernameEl!.textContent = username;  // ändra med api sen
    sectionUserInfoEl!.appendChild(pUsernameEl!);

    const sectionButtonEl = document.createElement("section") as HTMLElement | null;
    sectionNoteFooterEl!.appendChild(sectionButtonEl!);
    const buttonRemoveEl = document.createElement("button") as HTMLButtonElement | null;
    buttonRemoveEl!.classList.add("remove");
    buttonRemoveEl!.id = "btnRemoveNote";
    buttonRemoveEl!.textContent = "Ta bort";
    buttonRemoveEl!.addEventListener("click", () => {
        removeNote(id);
    })
    sectionButtonEl!.appendChild(buttonRemoveEl!);
}








