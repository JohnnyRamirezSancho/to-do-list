import { listUsers } from "./addUser";
import listAllUsers from "./listAllUsers";
import textNameUserValid from "./textNameUserValid";

export default function UpdateUser(nameUser, idUser) {
    console.log(nameUser);
    console.log(idUser);
    if (!confirm(`Are you sure you want to update ${nameUser}?`)) {
        return;
    }

    const userUpd = document.getElementById(`input-update-user-${idUser}`);
    const name = userUpd.value;

    if (textNameUserValid(name)) {
        let list = listUsers.findIndex(user => user.id == idUser);
        let desactived = "";
        if (list > -1) {
            desactived = listUsers[list]["desactivated"];
            listUsers.splice(list, 1);
        }
        let addPush = {};
        addPush.id = idUser;
        addPush.name = name;
        addPush.desactivated = desactived;
        listUsers.push(addPush);
        userUpd.value = "";
        alert(`User ${nameUser} updated successfully to ${name}!`);
        listAllUsers(idUser);
       }
}