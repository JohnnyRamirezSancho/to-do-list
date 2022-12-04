import { listUsers } from "./addUser";
import listAllUsers from "./listAllUsers";

export default function deleteUser(nameUser, idUser) {
    if (!confirm(`Are you sure you want to remove ${nameUser}?`)) {
        return;
    }

    let list = listUsers.findIndex(user => user.name == nameUser);
    if (list > -1) {
        listUsers.splice(list, 1);
    }

    listAllUsers();
    alert(`User ${nameUser} deleted successfully!`);
}