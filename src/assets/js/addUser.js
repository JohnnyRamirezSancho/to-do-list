import listAllUsers from "./listAllUsers";
import textNameUserValid from "./textNameUserValid";

export let listUsers = [];

export default function addUser() {
    const name = nameAddUser.value;
    if (textNameUserValid(name)) {
        let addPush = {};
        addPush.id = Date.now();
        addPush.name = name;
        addPush.desactivated = false;
        listUsers.push(addPush);
        nameAddUser.value = "";
        listAllUsers(addPush.id);
        alert(`User ${name} added successfully!`);
    }
}