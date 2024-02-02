
export function AddNewNote(noteText: string, username: string) {
    console.log("La till en note");
    
    
    if (noteText != "" && username != "") {
        const ulEl: HTMLUListElement | null = document.querySelector(".notes-list");

        const listEl: HTMLElement | null = document.createElement("li");
        ulEl?.appendChild(listEl);
        const articleEL: HTMLElement | null = document.createElement("article");
        articleEL.classList.add("note");
        listEl.appendChild(articleEL);

        const sectionNoteInfoEl: HTMLElement | null = document.createElement("section");
        sectionNoteInfoEl.classList.add("note-info");
        articleEL.appendChild(sectionNoteInfoEl);

        const pDateEl: HTMLElement | null = document.createElement("p");
        pDateEl.classList.add("publish-date");
        pDateEl.textContent = " Måndag 2 December"; // Ska tas från api sen
        sectionNoteInfoEl.appendChild(pDateEl);

        const TextAreaTextNoteEl = document.createElement("textarea") as HTMLTextAreaElement;
        TextAreaTextNoteEl.classList.add("text-note");
        TextAreaTextNoteEl.textContent = noteText; // ändra med api sen;
        sectionNoteInfoEl.appendChild(TextAreaTextNoteEl);

        const buttonUpdateEl: HTMLButtonElement | null = document.createElement("button");
        buttonUpdateEl.classList.add("update");
        buttonUpdateEl.id = "btnUpdateNote";
        buttonUpdateEl.textContent = "Uppdatera";
        sectionNoteInfoEl.appendChild(buttonUpdateEl);
        //Sätta id här med hjälp av api??

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
        sectionButtonEl.appendChild(buttonRemoveEl);
    }

    else {
        window.alert("Fyll i alla fält innan du lägger till");
    }



}

