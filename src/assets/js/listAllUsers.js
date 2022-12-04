import activateButtons from "./activateButtons";
import { listUsers } from "./addUser";
import listOrderAsc from "./listOrderAsc";

export default function listAllUsers(idUser) {
    let list = "";
    listOrderAsc(listUsers, "name");
    listUsers.forEach(user => {
        console.log(idUser);
        console.log(user.id);
        if(idUser == user.id) {
            list += `<li id="lastUser">`;
        } else {
            list += `<li>`;
        }
        list += `<p name="${user.id}" value="${user.name}" class="visible">${user.name}</p>`;
        list += `<button name="${user.id}" id="delete-user-${user.id}" class="visible delete-button" value="${user.name}"></button>`;
        list += `<button name="${user.id}" id="update-user-${user.id}" class="visible update-button" value="${user.name}"></button>`;
        list += `<input type="text" name="${user.name}" id="input-update-user-${user.id}" value="${user.name}" class="invisible">`;
        list += `<button name="${user.name}" id="button-update-user-${user.id}" class="invisible btn-update" value="${user.id}"></button>`;
        list += `<button name="${user.name}" id="button-update-user-${user.id}" class="invisible btn-cancel-update" value="${user.id}"></button>`;
        list += `</li>`;
    });
    ulListUsers.innerHTML = list;
    activateButtons();
}