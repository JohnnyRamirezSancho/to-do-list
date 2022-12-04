import { listUsers } from "./addUser";

export default function textNameUserValid(name) {
    if (name == "") {
        alert("You must enter the name of the participant.");
        return false;
    }

    if (listUsers.filter(function (user) { return user.name == name }) != "") {
        alert(`The name ${name} is already being used.\nPlease use another one.`);
        return false;
    }

    return true;
}