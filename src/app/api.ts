import axios, { AxiosError } from "axios";
import { addNewNote } from "./createNotes";
export const BASE_URL = "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";


interface getData {
    createdAt: string
    id: string
    note: string
    title: string
    username: string
}


export async function postRequest(username: string, title: string, note: string) {

    try {
        const newNote = {
            username: username,
            title: title,
            note: note
        }

        const response: Response = await axios.post(`${BASE_URL}/api/notes`, newNote);

        console.log("Response from server", response);

        return response;
    }
    catch (error) {
        console.error("Någt gick fel med POST request");
        throw AxiosError;
    }

}

export async function GetRequest() {

    try {
        const response = await axios.get(`${BASE_URL}/api/notes/skoanton`);

        const notes: getData[] = response.data.notes;
        console.log(notes);
        notes.forEach(newNote => {
            addNewNote(newNote.title, newNote.note, newNote.username, newNote.createdAt, newNote.id);
        });
        return response;
    }

    catch (error) {
        console.error("Något gick fel med GET Request");
        throw AxiosError;
    }


}

export async function putRequest(note: string, id: string) {

    try {
            const newNote = {            
                note: note
            }

            const response: Response = await axios.put(`${BASE_URL}/api/notes/${id}`, newNote);
            console.log("Response from server", response);

            return response;

        }
    catch (error) {
        console.error("Någt gick fel med PUT request");
        throw AxiosError;
    }

} 


export async function deleteRequest(id:string){
    try{
        
        const response: Response = await axios.delete(`${BASE_URL}/api/notes/${id}`);
        console.log(response);
        return response;
    }

    catch(error){
        console.error("Något gick fel med DELETE Request");
        throw AxiosError;
    }
}