const notesViewEl : HTMLElement | null = document.querySelector(".notes");
const startPageViewEl : HTMLElement | null = document.querySelector(".start-page")
const newNoteViewEl : HTMLElement | null = document.querySelector(".new-note");


const views =[
    notesViewEl,
    startPageViewEl,
    newNoteViewEl
]


export function switchView(){
    console.log("Switching view");

        views.forEach(view => {
            console.log(view);
            if(view?.classList.contains("hide")){
                view.classList.remove("hide");
            }
            else{
                view?.classList.add("hide");
            }
        });
    
    
}