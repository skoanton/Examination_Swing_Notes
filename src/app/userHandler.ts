export let currentUsername:string;

const usernameLoginInputEl = document.getElementById("usernameLogin") as HTMLInputElement;


export function setUsername(username:string){
    currentUsername = username;
    document.getElementById("currentUser")!.textContent = currentUsername;
    usernameLoginInputEl.value = "";
    console.log(usernameLoginInputEl);
}

