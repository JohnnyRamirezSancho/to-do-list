import listAllUsers from "./listAllUsers.js";
import textNameUserValid from "./textNameUserValid.js";

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