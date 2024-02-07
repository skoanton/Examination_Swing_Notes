const notesViewEl = document.querySelector(".notes") as HTMLElement | null;
const newNoteViewEl = document.querySelector(".new-note")as HTMLElement | null;
const loginViewEl = document.querySelector(".login-page") as HTMLElement | null;

export const views ={
    notesViewEl: notesViewEl,
    newNoteViewEl: newNoteViewEl,
    loginViewEl: loginViewEl   
}


/* Här använder jag generic function. Så man kan byta mellan olika typer utav
HTMLElement. <T Extend HTMLElement gör så det kan vara "subtyper" av
HTMLElement också. */

export function switchView<T extends HTMLElement> (currentView:T, nextView:T): void {
    currentView.classList.add("hide");
    nextView.classList.remove("hide");
    
}