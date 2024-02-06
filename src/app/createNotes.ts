import { postRequest } from "./api";
import { removeNote, editNote, updateNote } from "./editNotes";


export async function createNote(titleText: string, noteText: string, username: string) {

    if (titleText != "" && noteText != "" && username != "") {
        postRequest(username, titleText, noteText);
    }

    else {
        window.alert("Fyll i alla fält innan du lägger till");
    }

}

export function addNewNote(titleText: string, noteText: string, username: string, date: string, id: string) {
    console.log("La till en note");

    const ulEl: HTMLUListElement | null = document.querySelector(".notes-list");

    const listEl: HTMLElement | null = document.createElement("li");
    ulEl?.appendChild(listEl);
    const articleEL: HTMLElement | null = document.createElement("article");
    articleEL.classList.add("note");
    articleEL.id = id;
    listEl.appendChild(articleEL);

    const sectionNoteInfoEl: HTMLElement | null = document.createElement("section");
    sectionNoteInfoEl.classList.add("note-info");
    articleEL.appendChild(sectionNoteInfoEl);

    const pDateEl: HTMLElement | null = document.createElement("p");
    pDateEl.classList.add("publish-date");
    pDateEl.textContent = date;
    sectionNoteInfoEl.appendChild(pDateEl);

    const textAreaTitleNoteEL = document.createElement("textarea") as HTMLTextAreaElement;
    textAreaTitleNoteEL.classList.add("title-note");
    textAreaTitleNoteEL.textContent = titleText;
    textAreaTitleNoteEL.readOnly;
    sectionNoteInfoEl.appendChild(textAreaTitleNoteEL);


    const textAreaNoteEl = document.createElement("textarea") as HTMLTextAreaElement;
    textAreaNoteEl.classList.add("text-note");
    textAreaNoteEl.textContent = noteText;
    textAreaNoteEl.readOnly = true;
    sectionNoteInfoEl.appendChild(textAreaNoteEl);

    const buttonUpdateEl: HTMLButtonElement | null = document.createElement("button");
    buttonUpdateEl.classList.add("update");
    buttonUpdateEl.id = "btnUpdateNote";
    buttonUpdateEl.textContent = "Edit";
    sectionNoteInfoEl.appendChild(buttonUpdateEl);
    buttonUpdateEl.addEventListener("click", () => {
        
        if(buttonUpdateEl.classList.contains("update")){
            editNote(id);
        }

        else if(buttonUpdateEl.classList.contains("edit")){
            updateNote(id);
        }
                
    } )

    const sectionNoteFooterEl: HTMLElement | null = document.createElement("section");
    sectionNoteFooterEl.classList.add("note-footer");
    articleEL.appendChild(sectionNoteFooterEl);

    const sectionUserInfoEl: HTMLElement | null = document.createElement("section");
    sectionUserInfoEl.classList.add("user-info");
    sectionNoteFooterEl.appendChild(sectionUserInfoEl);

    const imgUserInfoEl: HTMLImageElement | null = document.createElement("img");
    imgUserInfoEl.src = ("./src/assets/dash.svg");
    sectionUserInfoEl.appendChild(imgUserInfoEl);

    const pUsernameEl: HTMLElement | null = document.createElement("p");
    pUsernameEl.classList.add("user");
    pUsernameEl.textContent = username;  // ändra med api sen
    sectionUserInfoEl.appendChild(pUsernameEl);

    const sectionButtonEl: HTMLElement | null = document.createElement("section");
    sectionNoteFooterEl.appendChild(sectionButtonEl);
    const buttonRemoveEl: HTMLButtonElement | null = document.createElement("button");
    buttonRemoveEl.classList.add("remove");
    buttonRemoveEl.id = "btnRemoveNote";
    buttonRemoveEl.textContent = "Ta bort";
    buttonRemoveEl.addEventListener("click", () => {
        removeNote(id);
    })
    sectionButtonEl.appendChild(buttonRemoveEl);
}








