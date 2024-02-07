import { deleteRequest, putRequest } from "./api";

export function editNote(id: string) {
   
    const articleToChange = document.getElementById(id) as HTMLElement | null;

    const note = articleToChange?.querySelector(".text-note") as HTMLTextAreaElement | null;
    const button = articleToChange?.querySelector(".update") as HTMLButtonElement | null;
    button!.classList.add("edit");
    button!.classList.remove("update");
    note!.readOnly = false;
    button!.textContent = "Update";
    note!.style.outline = "1px solid black";
}

export function updateNote(id:string){
  
    const articleToChange = document.getElementById(id) as HTMLElement | null;

    const note = articleToChange?.querySelector(".text-note") as HTMLTextAreaElement | null;
    const button = articleToChange?.querySelector(".edit") as HTMLButtonElement | null;
    button!.classList.add("update");
    button!.classList.remove("edit");
    note!.readOnly = true;
    button!.textContent = "Edit";
    note!.style.outline = "none";
    putRequest(note!.value,id);
}

export async function removeNote(id:string) {
   
   if( await deleteRequest(id)){
    const articleToChange = document.getElementById(id) as HTMLElement | null;
    while (articleToChange?.firstChild){
        articleToChange.removeChild(articleToChange.firstChild);
    }
    articleToChange?.parentElement?.remove();
    articleToChange?.remove();
   };
   
}

export function resetList(){

    const ulEl = document.querySelector(".notes-list") as HTMLOListElement | null;

    while(ulEl!.firstChild){
        ulEl!.removeChild(ulEl!.firstChild);
    }

}