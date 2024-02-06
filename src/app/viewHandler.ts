const notesViewEl = document.querySelector(".notes") as HTMLElement;
const newNoteViewEl = document.querySelector(".new-note")as HTMLElement;
const loginViewEl = document.querySelector(".login-page") as HTMLElement;

export const views ={
    notesViewEl: notesViewEl,
    newNoteViewEl: newNoteViewEl,
    loginViewEl: loginViewEl   
}

export function switchView(currentView:HTMLElement, nextView:HTMLElement) {
    currentView.classList.add("hide");
    nextView.classList.remove("hide");

}